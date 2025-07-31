export async function expectToHaveTextWithLogging(element, expectedText, timeout = 2000) {
    try {
        // Wait for the element to be displayed first
        await element.waitForDisplayed({ timeout });
 
        // Get the actual text of the element
        const actualText = await element.getText();
 
        // Log both texts for debugging
        console.log(`Checking element text. Expected: "${expectedText}", Actual: "${actualText}"`);
 
        // Assert actual vs expected explicitly for clearer error message
        if (actualText !== expectedText) {
            throw new Error(`Text mismatch! Expected: "${expectedText}", but found: "${actualText}"`);
        }
    } catch (error) {
        // If waitForDisplayed or assertion fails, throw with more info
        throw new Error(`Failed to verify element text within ${timeout}ms. ${error.message}`);
    }
}
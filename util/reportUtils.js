const allureReporter = require('@wdio/allure-reporter').default;

async function runStepWithScreenshot(stepName, actionFn) {
    allureReporter.startStep(stepName);
    try {
        await actionFn();
        const screenshot = await browser.takeScreenshot();
        allureReporter.addAttachment(
            stepName,
            Buffer.from(screenshot, 'base64'),
            'image/png'
        );
        allureReporter.endStep('passed');
    } catch (err) {
        allureReporter.addAttachment('Error', err.message, 'text/plain');
        allureReporter.endStep('failed');
        throw err;
    }
}

module.exports = { runStepWithScreenshot };

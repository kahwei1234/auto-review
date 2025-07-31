export async function pauseAndClick(element, pauseMs = 1000, timeoutMs = 5000, pollInterval = 500) {
  await browser.pause(pauseMs);

  const startTime = Date.now();

  while (Date.now() - startTime < timeoutMs) {
    try {
      const displayed = await element.isDisplayed();
      const enabled = await element.isEnabled();

      if (displayed && enabled) {
        await element.click();
        return;
      }
    } catch {
      // ignore errors, e.g., stale element reference
    }
    await browser.pause(pollInterval);
  }

  throw new Error(`Element was not displayed and enabled after ${timeoutMs} ms, cannot click.`);
}


export async function pauseAndSetValue(element, value, delay = 1000, timeoutMs = 5000, pollInterval = 500) {
  await browser.pause(delay);

  const startTime = Date.now();

  while (Date.now() - startTime < timeoutMs) {
    try {
      const displayed = await element.isDisplayed();
      const enabled = await element.isEnabled();

      if (displayed && enabled) {
        await element.setValue(value);
        return;
      }
    } catch {
      // ignore errors
    }
    await browser.pause(pollInterval);
  }

  throw new Error(`Element was not displayed and enabled after ${timeoutMs} ms, cannot set value.`);
}

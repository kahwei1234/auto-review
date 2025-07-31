const { runStepWithScreenshot } = require('../../../util/reportUtils');

describe('Sample Test', function () {
  it('should run a step with screenshot', async function () {
    await runStepWithScreenshot('Sample step', async () => {
      await browser.url('https://webdriver.io');
      await browser.pause(1000);
    });
  });
});

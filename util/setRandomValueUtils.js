export async function setRandomValue(element, prefix, max = 1000, pauseMs = 1000) {
  await browser.pause(pauseMs);
  const randomSuffix = Math.floor(Math.random() * max);
  const value = `${prefix}${randomSuffix}`;
  await element.setValue(value);
  return value;
}
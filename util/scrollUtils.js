/**
 * Performs a configurable scroll gesture using touchAction.
 * @param {Object} options - Scroll options
 * @param {number} options.startX - Starting X coordinate
 * @param {number} options.startY - Starting Y coordinate
 * @param {number} options.endX - Ending X coordinate
 * @param {number} options.endY - Ending Y coordinate
 * @param {number} [options.delay=1000] - Wait time before move (ms)
 */
export async function performScrollGesture({
  startX,
  startY,
  endX,
  endY,
  delay = 1000
}) {
  await browser.touchAction([
    { action: 'press', x: startX, y: startY },
    { action: 'wait', ms: delay },
    { action: 'moveTo', x: endX, y: endY },
    'release'
  ]);
}

/**
 * Performs a scroll gesture multiple times. 
 * @param {number} count - Number of times to repeat
 * @param {Object} gestureOptions - Options for the scroll gesture
 */
export async function repeatScrollGesture(count, gestureOptions) {
  for (let i = 0; i < count; i++) {
    await performScrollGesture(gestureOptions);
  }
}

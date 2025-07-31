const username = "461782";
const password = "Kwhome0)";
const encoded = btoa(`${username}:${password}`);

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    console.log('Intercepted request:', details.url);
    details.requestHeaders.push({
      name: "Proxy-Authorization",
      value: "Basic " + encoded
    });
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);


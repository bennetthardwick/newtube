chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
         return {redirectUrl: "https://youtube.com/feed/subscriptions"};
    },
    {
        urls: [
            "https://www.youtube.com/",
        ],
    },
    ["blocking"]
);
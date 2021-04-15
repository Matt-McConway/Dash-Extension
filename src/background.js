// create context menu item, with simple onclick event that brings users to the main.html
chrome.contextMenus.create(
  {
    id: "main_page",
    title: "Open Main Page",
    onclick: () => {
      chrome.tabs.create({
        url: chrome.runtime.getURL("src/main.html"),
      });
    },
    contexts: ["browser_action"],
  },
  () => {}
);

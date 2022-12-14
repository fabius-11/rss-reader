const DEFAULT_VALUE = [{ title: "xatakan", url: "http://www.xatakandroid.com/tag/feeds/rss2.xml" }];

export function getHistory() {
  try {
    const history = localStorage.getItem("urlHistory");
    if (history) {
      return JSON.parse(history);
    }
  } catch (e) {
    console.error(e);
  }
  return DEFAULT_VALUE;
}

export function addHistoryItem({ title, url }) {
  const history = getHistory();
  const itemIndex = history.findIndex((item) => item.title === title && item.url === url);
  if (itemIndex !== -1) {
    history.splice(itemIndex, 1);
  }
  history.unshift({ title, url });
  localStorage.setItem("urlHistory", JSON.stringify(history.slice(0, 10)));
}

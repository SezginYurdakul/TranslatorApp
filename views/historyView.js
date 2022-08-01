export const createHistoryView = () => {
  const htmlString = String.raw`<div id="historyFrame"></div>`;
  return toHtmlElement(htmlString);
};

const toHtmlElement = (htmlStr) => {
  const template = document.createElement("template");
  template.innerHTML = htmlStr.trim();
  return template.content.firstChild;
};

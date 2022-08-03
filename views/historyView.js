import { toHtmlElement } from "../pages/createToHtmlElement.js";

export const createHistoryView = () => {
  const htmlString = String.raw`<div id="historyFrame"></div>`;
  return toHtmlElement(htmlString);
};

import { createTranslatePage } from "../pages/translatePage.js";
import { createHistoryPage } from "../pages/historyPage.js";

export function initialPageLoad() {
  createTranslatePage();
  createHistoryPage();
}

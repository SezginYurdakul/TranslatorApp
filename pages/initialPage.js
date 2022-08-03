import { createTranslatePage } from "../pages/translatePage.js";
import { createHistoryPage } from "../pages/historyPage.js";
import { showTranslatePage } from "../pages/historyPage.js";

export function initialPageLoad() {
  createTranslatePage();
  createHistoryPage();
  showTranslatePage();
}

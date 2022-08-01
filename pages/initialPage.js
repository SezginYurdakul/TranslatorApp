import { countries } from "./languages.js";
import { createTranslateView } from "../views/translateView.js";
import { createHistoryView } from "../views/historyView.js";
import { translate } from "../views/translate.js";
import { exchangeLanguages } from "./exchangeLang.js";
import { cleanToTextArea } from "./cleanTextArea.js";
import { createHistoryPage } from "../views/showHistoryPage.js";

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Page URL copied to clipboard");
  } catch (err) {
    console.log("Failed to copy: ", err);
  }
}

export function initialPageLoad() {
  const userInterface = document.getElementById("userInterface");
  userInterface.appendChild(createTranslateView());
  userInterface.appendChild(createHistoryView());

  const fromText = document.querySelector(".from-text");
  const toText = document.querySelector(".to-text");
  const translateBtn = document.querySelector("button");
  const exchangeIcon = document.querySelector(".exchange");
  const icons = document.querySelectorAll(".row i");
  const showHistoryButton = document.querySelector("#showHistory");
  const selectTag = document.querySelectorAll("select");

  selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
      let selected =
        id == 0
          ? country_code == "en"
            ? "selected"
            : ""
          : country_code == "tr"
          ? "selected"
          : "";
      let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
      tag.insertAdjacentHTML("beforeend", option);
    }
  });

  showHistoryButton.addEventListener("click", createHistoryPage);
  translateBtn.addEventListener("click", translate);
  exchangeIcon.addEventListener("click", exchangeLanguages);
  fromText.addEventListener("keyup", cleanToTextArea);

  icons.forEach((icon) => {
    icon.addEventListener("click", ({ target }) => {
      if (!fromText.value || !toText.value) return;

      if (target.classList.contains("copy")) {
        if (target.id == "leftC") {
          copyTextToClipboard(fromText.value);
        } else {
          copyTextToClipboard(toText.value);
        }
      } else {
        let utterance;
        if (target.id == "leftV") {
          utterance = new SpeechSynthesisUtterance(fromText.value);
        } else {
          utterance = new SpeechSynthesisUtterance(toText.value);
        }
        speechSynthesis.speak(utterance);
      }
    });
  });
}

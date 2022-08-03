import { countries } from "./languages.js";
import { createTranslateView } from "../views/translateView.js";
import { translate } from "./translate.js";
import { exchangeLanguages } from "./exchangeLang.js";
import { cleanToTextArea } from "./cleanTextArea.js";
import { createHistoryPage } from "../pages/historyPage.js";

export const createTranslatePage = () => {
  const userInterface = document.getElementById("userInterface");
  userInterface.appendChild(createTranslateView());
  const fromText = document.querySelector(".from-text");
  const toText = document.querySelector(".to-text");
  const translateBtn = document.querySelector("button");
  const exchangeIcon = document.querySelector(".exchange");
  const showHistoryButton = document.querySelector("#showHistory");
  const leftTextCopyButton = document.querySelector("#leftC");
  const rightTextCopyButton = document.querySelector("#rightC");
  const listenLeftTextButton = document.getElementById("leftV");
  const listenRightTextButton = document.getElementById("rightV");

  populateSelectElements();

  showHistoryButton.addEventListener("click", createHistoryPage);
  translateBtn.addEventListener("click", translate);
  exchangeIcon.addEventListener("click", exchangeLanguages);
  fromText.addEventListener("keyup", cleanToTextArea);

  leftTextCopyButton.addEventListener("click", () =>
    copyTextToClipboard(fromText.value)
  );
  rightTextCopyButton.addEventListener("click", () =>
    copyTextToClipboard(toText.value)
  );

  listenLeftTextButton.addEventListener("click", () =>
    listenText(fromText.value)
  );
  listenRightTextButton.addEventListener("click", () =>
    listenText(toText.value)
  );
};

const populateSelectElements = () => {
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
      const option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
      tag.insertAdjacentHTML("beforeend", option);
    }
  });
};

async function copyTextToClipboard(text) {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    console.log("Page URL copied to clipboard");
  } catch (err) {
    console.log("Failed to copy: ", err);
  }
}

const listenText = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};

import { initialPageLoad } from "./initialPage.js";
import { translate } from "./translate.js";
import { exchangeLanguages } from "./exchangeLang.js";
import { cleanToTextArea } from "./cleanTextArea.js";

const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const translateBtn = document.querySelector("button");
const exchageIcon = document.querySelector(".exchange");
const icons = document.querySelectorAll(".row i");

translateBtn.addEventListener("click", translate);
exchageIcon.addEventListener("click", exchangeLanguages);
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

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Page URL copied to clipboard");
  } catch (err) {
    console.log("Failed to copy: ", err);
  }
}

window.addEventListener("load", initialPageLoad);

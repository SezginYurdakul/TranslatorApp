import { initialPageLoad } from "./initialPage.js";
import { translate } from "./translate.js";
import { exchangeLanguages } from "./exchangeLang.js";
import { controlButtonFunctions } from "./controlFunctions.js";
import { cleanToTextArea } from "./cleanTextArea.js";

const fromText = document.querySelector(".from-text");
const translateBtn = document.querySelector("button");
const exchageIcon = document.querySelector(".exchange");
const icons = document.querySelectorAll(".row i");

translateBtn.addEventListener("click", translate);

exchageIcon.addEventListener("click", exchangeLanguages);

fromText.addEventListener("keyup", cleanToTextArea);

icons.forEach((icon) => {
  icon.addEventListener("click", controlButtonFunctions());
});

window.addEventListener("load", initialPageLoad);

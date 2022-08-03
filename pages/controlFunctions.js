"use strict";
import { FROM_TEXT } from "../constants";

const fromText = document.querySelector(FROM_TEXT);
const toText = document.querySelector(".to-text");

function controlButtonFunctions(target) {
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
}

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Page URL copied to clipboard");
  } catch (err) {
    console.log("Failed to copy: ", err);
  }
}

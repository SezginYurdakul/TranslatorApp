"use strict";
import { createApiConnection } from "../services/apiService.js";

export function translate() {
  const selectTag = document.querySelectorAll("select");
  const fromText = document.querySelector(".from-text");
  const text = fromText.value.trim();
  const translateFrom = selectTag[0].value;
  const translateTo = selectTag[1].value;

  createApiConnection(text, translateFrom, translateTo);
}

"use strict";
import { writeDownToLocaleStorage } from "../pages/writeDownToLocale.js";
import { countries } from "../pages/languages.js";

export async function translate() {
  const selectTag = document.querySelectorAll("select");
  const fromText = document.querySelector(".from-text");
  const toText = document.querySelector(".to-text");
  const text = fromText.value.trim();
  const translateTo = selectTag[0].value;
  const translateFrom = selectTag[1].value;
  
  
  const apiKey = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "1634848dd6msha6981eb6d5c1d4ep1d8f26jsn5c369189cb99",
      "X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
    },
  };
  const apiUrl = `https://google-translate20.p.rapidapi.com/translate?text=${text}&tl=${translateFrom}&sl=${translateTo}`;

  if (!text) return;
  toText.setAttribute("placeholder", "Translating...");

  try {
    const getDataFromApi = await fetchData(apiUrl, apiKey);
    const getData = await getDataFromApi.data;
    const translatedData = getData.translation;
    toText.value = translatedData;
    writeDownToLocaleStorage(
      countries[translateTo],
      countries[translateFrom],
      text
    );
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchData(url, apiKey) {
  const response = await fetch(url, apiKey);
  if (response.ok) {
    return response.json();
  }
  throw new Error("There is a connection problem. Please try again later.");
}

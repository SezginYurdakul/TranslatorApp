"use strict";
import { countries } from "../pages/languages.js";
import { writeDownToLocaleStorage } from "../pages/writeDownToLocale.js";
export async function createApiConnection(text, translateFrom, translateTo) {
  const apiKey = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "1634848dd6msha6981eb6d5c1d4ep1d8f26jsn5c369189cb99",
      "X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
    },
  };
  const apiUrl = `https://google-translate20.p.rapidapi.com/translate?text=${text}&tl=${translateFrom}&sl=${translateTo}`;
  const toText = document.querySelector(".to-text");
  if (!text) return;
  toText.setAttribute("placeholder", "Translating...");

  try {
    const getDataFromApi = await fetchData(apiUrl, apiKey);
    const getData = getDataFromApi.data;
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

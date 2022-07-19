//import countries from "./countries";
const selectTag = document.querySelectorAll("select");
const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const translateBtn = document.querySelector("button");
exchageIcon = document.querySelector(".exchange");
icons = document.querySelectorAll(".row i");

function initialPageLoad() {
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
}

translateBtn.addEventListener("click", async () => {
  const text = fromText.value.trim();
  const translateTo = selectTag[0].value;
  const translateFrom = selectTag[1].value;
  const apiKey = {
    method: "GET",
    headers: {
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
  } catch (error) {
    console.log(error.message);
  }
});

exchageIcon.addEventListener("click", () => {
  let tempText = fromText.value,
    tempLang = selectTag[0].value;
  fromText.value = toText.value;
  toText.value = tempText;
  selectTag[0].value = selectTag[1].value;
  selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
  if (!fromText.value) {
    toText.value = "";
  }
});

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Page URL copied to clipboard");
  } catch (err) {
    console.log("Failed to copy: ", err);
  }
}

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
        //utterance.lang = selectTag[0].value;
      } else {
        utterance = new SpeechSynthesisUtterance(toText.value);
        //utterance.lang = selectTag[1].value;
      }
      speechSynthesis.speak(utterance);
    }
  });
});

async function fetchData(url, apiKey) {
  const response = await fetch(url, apiKey);
  if (response.ok) {
    return response.json();
  }
  throw new Error("There is a connection problem. Please try again later.");
}

window.addEventListener("load", initialPageLoad);

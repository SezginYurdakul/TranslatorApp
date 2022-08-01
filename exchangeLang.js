export function exchangeLanguages() {
  const selectTag = document.querySelectorAll("select");
  const fromText = document.querySelector(".from-text");
  const toText = document.querySelector(".to-text");
  let tempText = fromText.value;
  const tempLang = selectTag[0].value;
  fromText.value = toText.value;
  toText.value = tempText;
  selectTag[0].value = selectTag[1].value;
  selectTag[1].value = tempLang;
}

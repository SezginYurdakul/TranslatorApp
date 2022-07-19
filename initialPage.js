import { countries } from "./languages.js";
const selectTag = document.querySelectorAll("select");
export function initialPageLoad() {
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

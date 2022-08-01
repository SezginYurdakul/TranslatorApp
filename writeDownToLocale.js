import { addRecord } from "./services/localStorageService.js";

export function writeDownToLocaleStorage(fromLang, targetLang, fromText) {
  const currentDate = createDateTime();
  const record = {
    id: Date.now(),
    date: currentDate,
    fromLang: fromLang,
    toLang: targetLang,
    text: fromText,
  };
  addRecord(record);
}

function createDateTime() {
  const currentDate = new Date();
  const datetime =
    (currentDate.getDay() < 10 ? "0" : "") +
    currentDate.getDay() +
    "/" +
    (currentDate.getMonth() < 10 ? "0" : "") +
    currentDate.getMonth() +
    "/" +
    currentDate.getFullYear() +
    " - " +
    (currentDate.getHours() < 10 ? "0" : "") +
    currentDate.getHours() +
    ":" +
    (currentDate.getMinutes() < 10 ? "0" : "") +
    currentDate.getMinutes() +
    ":" +
    (currentDate.getSeconds() < 10 ? "0" : "") +
    currentDate.getSeconds();
  return datetime;
}

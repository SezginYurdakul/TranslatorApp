"use strict";
export function writeDownToLocaleStorage(fromLang, fromText) {
  const currentDate = createDateTime;
  const info = [currentDate, fromLang, fromText];
  if (fromLang.length === 0 || fromText.length === 0) {
    console.log("Text is Empty !!");
  } else {
    localStorage.setItem(currentDate, info);
  }
}

function createDateTime() {
  const currentDate = new Date();
  const datetime =
    "Last Sync: " +
    currentDate.getDay() +
    "/" +
    currentDate.getMonth() +
    "/" +
    currentDate.getFullYear() +
    " @ " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  return datetime;
}

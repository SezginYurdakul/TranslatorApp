"use strict";
const translateFrame = document.querySelector("#translateFrame");
const historyFrame = document.querySelector("#historyFrame");
const currentDate = createDateTime();

export function createHistoryPage() {
  translateFrame.style.display = "none";
  historyFrame.style.display = "block";
  historyFrame.innerHTML = String.raw`
  <div> <h2 id="searchHistory">Search History</h2></div>
  <table id="searchHistoryTable">
  <tr>
    <th>Select</th>
    <th>Date&Time</th>
    <th>From Language</th>
    <th>Text to be Translated</th>
  </tr>
</table>
`;
  createTable;
}

function myDeleteFunction(k) {
  document.getElementById("searchHistoryTable").deleteRow(k);
}

function createTable() {
  const numberOfLocalStorageItems = localStorage.length;
  for (let i = 0; index < numberOfLocalStorageItems; i++) {
    const table = document.getElementById("searchHistoryTable");
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = localStorage.key(i)[0];
    cell2.innerHTML = localStorage.key(i)[1];
    cell3.innerHTML = localStorage.key(i)[2];
  }
}

function writeDownToLocale(fromLang, fromText) {
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

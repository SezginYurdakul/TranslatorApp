import { createHistoryView } from "../views/historyView.js";
import { deleteRecord, getAllInfo } from "../services/localStorageService.js";

let selectedRecordList = [];
export const createHistoryPage = () => {
  const userInterface = document.getElementById("userInterface");
  userInterface.appendChild(createHistoryView());

  const translateFrame = document.querySelector("#translateFrame");
  const historyFrame = document.querySelector("#historyFrame");

  if (historyFrame.innerHTML != null) {
    historyFrame.innerHTML = "";
  }

  translateFrame.style.display = "none";
  historyFrame.style.display = "block";

  const historyHeadersElement = document.createElement("div");
  historyHeadersElement.id = "historyHeaders";
  historyFrame.appendChild(historyHeadersElement);

  const searchHistoryElement = document.createElement("h2");
  searchHistoryElement.id = "searchHistory";
  searchHistoryElement.innerText = "Search History";
  historyHeaders.appendChild(searchHistoryElement);

  const deleteButtonElement = document.createElement("p");
  deleteButtonElement.id = "deleteButton";
  deleteButtonElement.innerText = "Delete Record";
  historyHeadersElement.appendChild(deleteButtonElement);

  const translatePageElement = document.createElement("p");
  translatePageElement.id = "translatePage";
  translatePageElement.innerText = "=>Translate Page=>";
  historyHeadersElement.appendChild(translatePageElement);

  const tableElement = document.createElement("table");
  tableElement.id = "searchHistoryTable";
  historyFrame.appendChild(tableElement);

  createTable();

  translatePageElement.addEventListener("click", () => {
    showTranslatePage();
  });
  deleteButtonElement.addEventListener("click", () => {
    myDeleteFunction();
  });
};

function createTable() {
  const allInfo = getAllInfo();
  const numberOfLocalStorageItems = allInfo.length;
  const table = document.getElementById("searchHistoryTable");
  table.innerHTML = String.raw`
    <tr>
        <th width="4%">Select</th>
        <th width="15%">Date&Time</th>
        <th width="8%">From Language</th>
        <th width="8%">Target Language</th>
        <th width="73%">Text to be Translated</th>
    </tr>`;

  for (let i = 0; i < numberOfLocalStorageItems; i++) {
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const record = allInfo[i];
    cell1.innerHTML = `<td><input type="checkbox" id="${record.id}"  class="select"></td>`;
    cell2.innerHTML = record.date;
    cell3.innerHTML = record.fromLang;
    cell4.innerHTML = record.toLang;
    cell5.innerHTML = record.text;
    document.getElementById(record.id).addEventListener("change", (event) => {
      if (event.target.checked) {
        selectedRecordList.push(event.target.id);
      } else {
        selectedRecordList = selectedRecordList.filter(
          (item) => item != event.target.id
        );
      }
    });
  }
}

export function showTranslatePage() {
  const translateFrame = document.querySelector("#translateFrame");
  const historyFrame = document.querySelector("#historyFrame");
  historyFrame.style.display = "none";
  translateFrame.style.display = "block";
}

function myDeleteFunction() {
  selectedRecordList.forEach((recordId) => {
    deleteRecord(recordId);
  });
  createTable();
}

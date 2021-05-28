import MyCompany from "./campany.js";
import QuotationTable from "./table.js";
import ClientCompany from "./client.js"
import DateAndNumber from "./date.js"
import company from "../config/config.js"


const input = document.getElementById("input-file");

input.addEventListener("change", function() {
  const result = input.files;
  main(result);
});

document.addEventListener("DOMContentLoaded",() => {

  const dropArea = document.getElementById("drop-area");
  dropArea.addEventListener("dragover",(e) => {
    e.preventDefault();
    dropArea.classList.add("drag");
  });
  dropArea.addEventListener("dragleave",(e) => {
    dropArea.classList.remove("drag");
  });
  dropArea.addEventListener("drop",(e) => {
    e.preventDefault();
    dropArea.classList.remove("drag");
    const result = e.dataTransfer.files;
    main(result);
  });
});

/**
 * メイン処理を実行する関数
 * @param {FileList} result 
 */
const main = function(result){
  const reader = new FileReader();
  reader.readAsText(result[0]);
  reader.addEventListener("load", function() {
    const json = JSON.parse(reader.result);
    const details = json["details"];
    const client = json["client"];
    const dateAndNumbers = json["dateAndNumbers"];

    const quotationTable = new QuotationTable(details);
    const myCompany = new MyCompany(company);
    const clientCompany = new ClientCompany(client,quotationTable.comma(quotationTable.grandTotal));
    const dateAndNumber = new DateAndNumber(dateAndNumbers);
    quotationTable.show();
    myCompany.show();
    clientCompany.show();
    dateAndNumber.show();

    input.style.display = "none";
    document.getElementById("h1").textContent = "見積書";
  });
}
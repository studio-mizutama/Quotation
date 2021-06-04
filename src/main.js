import MyCompany from "./company.js";
import QuotationTable from "./table.js";
import ClientCompany from "./client.js"
import DateAndNumber from "./date.js"
import company from "../sampleConfig/config.js"

/**
 * @param {number} 1: 見積書 2:納品書 3:請求書
 */
let type = 1;

/**
 * @param {boolean}
 */
let display = false;

let result = [];

const input = document.getElementById("input-file");
const useSample = document.getElementById("use-sample");

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");

const h1 = document.getElementById("h1");

tab1.addEventListener("change", function(){
  type = 1;
  document.title = "見積書";
  if(display) {
    main(result,type);
  };
});

tab2.addEventListener("change", function(){
  type = 2;
  document.title = "納品書";
  if(display) {
    main(result,type);
  };
});

tab3.addEventListener("change", function(){
  type = 3;
  document.title = "請求書"
  if(display) {
    main(result,type);
  };
});

useSample.addEventListener("click", function() {
  const blob = `
  {
    "details": [
      {
        "description": "項目1",
        "quantity": 1,
        "unit": "式",
        "price": 30000
      },
      {
        "description": "項目2",
        "quantity": 5,
        "unit": "式",
        "price": 10000
      }
    ],
    "client": {
      "name": "株式会社クライアント",
      "title": "Webサイト構築"
    },
    "dateAndNumbers": {
      "no": "2021-05-30-01",
      "quotationDate": "2021-05-30",
      "validUntil": "2021-06-10",
      "deliveryDue": "2021-06-30",
      "paymentMethod": "月末締め翌月末払い",
      "deliveryDate": "2021-06-30",
      "invoiceDate": "2021-06-30",
      "paymentDue": "2021-07-31"
    }
  }
  `;
  result[0] = new Blob([blob], {type: "application/json"});
  main(result,type);
});

input.addEventListener("change", function() {
  result = input.files;
  main(result,type);
});

document.addEventListener("DOMContentLoaded",() => {

  const dropArea = document.getElementById("drop-area");
  dropArea.addEventListener("dragover",(e) => {
    e.preventDefault();
    dropArea.classList.add("drag");
  });
  dropArea.addEventListener("dragleave",() => {
    dropArea.classList.remove("drag");
  });
  dropArea.addEventListener("drop",(e) => {
    e.preventDefault();
    dropArea.classList.remove("drag");
    result = e.dataTransfer.files;
    main(result,type);
  });
});

/**
 * メイン処理を実行する関数
 * @param {FileList} result 
 * @param {number} type
 */
const main = function(result,type){
  display = true;
  const reader = new FileReader();
  reader.readAsText(result[0]);
  reader.addEventListener("load", function() {
    const json = JSON.parse(reader.result);
    const details = json["details"];
    const client = json["client"];
    const dateAndNumbers = json["dateAndNumbers"];

    const quotationTable = new QuotationTable(details);
    const myCompany = new MyCompany(company);
    const clientCompany = new ClientCompany(client,type,quotationTable.comma(quotationTable.grandTotal));
    const dateAndNumber = new DateAndNumber(dateAndNumbers,company,type);
    quotationTable.show();
    myCompany.show();
    clientCompany.show();
    dateAndNumber.show();

    input.style.display = "none";
    useSample.style.display = "none";
    h1.style.letterSpacing = "1em";
    h1.style.textIndent = "1em";
    switch(type) {
      case 1:
        h1.textContent = "見積書";
        break;
      case 2:
        h1.textContent = "納品書";
        break;
      case 3:
        h1.textContent = "請求書";
        break;
    }
    document.title = h1.textContent + dateAndNumber.no;
  });
}
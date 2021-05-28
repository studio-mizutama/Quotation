import MyCompany from "./campany.js";
import QuotationTable from "./table.js";
import ClientCompany from "./client.js"
import DateAndNumber from "./date.js"
import company from "../config/config.js"


const input = document.getElementById("input-file");

input.addEventListener("change", function() {
  const result = input.files;
  const reader = new FileReader();
  reader.readAsText(result[0]);
  reader.addEventListener("load", function() {
    const json = JSON.parse(reader.result);
    const details = json["details"];
    const client = json["client"];
    const dateAndNumbers = json["dateAndNumbers"];

    const quotationTable = new QuotationTable(details);
    new MyCompany(company);
    new ClientCompany(client,quotationTable.comma(quotationTable.grandTotal));
    new DateAndNumber(dateAndNumbers);

    input.style.display = "none";
    document.getElementById("h1").textContent = "見積書";
  });
});
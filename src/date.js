/**
 * 作成日、有効期限等を表示するクラス
 */
export default class DateAndNumber {
  /**
   * @param {JSON} json 
   */
  constructor(json) {
    this.date = document.createElement("p");
    this.no = document.createElement("p");
    this.validUntil = document.createElement("dd");
    this.delivery = document.createElement("dd");
    this.payment = document.createElement("dd");

    this.date.textContent = json["date"];
    this.no.textContent = "見積番号：" + json["no"];

    this.validUntil.textContent = json["validUntil"];
    this.delivery.textContent = json["delivery"];
    this.payment.textContent = json["payment"];

    this.dateAndNumber = document.getElementById("date-and-number");
    this.remarks = document.getElementById("remarks");
    this.validUntilDt = document.createElement("dt");
    this.deliveryDt = document.createElement("dt");
    this.paymentDt = document.createElement("dt");
    this.validUntilDt.textContent = "有効期限";
    this.deliveryDt.textContent = "納期";
    this.paymentDt.textContent = "支払条件";
    this.remove();
  }
  show() {
    this.dateAndNumber.appendChild(this.date);
    this.dateAndNumber.appendChild(this.no);
    this.remarks.appendChild(this.validUntilDt);
    this.remarks.appendChild(this.validUntil);
    this.remarks.appendChild(this.deliveryDt);
    this.remarks.appendChild(this.delivery);
    this.remarks.appendChild(this.paymentDt);
    this.remarks.appendChild(this.payment);
  }
  remove() {
    this.dateAndNumber.innerHTML = "";
    this.remarks.innerHTML = "";
  }
}
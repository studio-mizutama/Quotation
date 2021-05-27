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

    let dateAndNumber = document.getElementById("date-and-number");
    let remarks = document.getElementById("remarks");
    let validUntil = document.createElement("dt");
    let delivery = document.createElement("dt");
    let payment = document.createElement("dt");
    validUntil.textContent = "有効期限";
    delivery.textContent = "納期";
    payment.textContent = "支払条件";

    dateAndNumber.appendChild(this.date);
    dateAndNumber.appendChild(this.no);

    remarks.appendChild(validUntil);
    remarks.appendChild(this.validUntil);
    remarks.appendChild(delivery);
    remarks.appendChild(this.delivery);
    remarks.appendChild(payment);
    remarks.appendChild(this.payment);
  }
}
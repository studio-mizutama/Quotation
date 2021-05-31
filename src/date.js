/**
 * 作成日、有効期限等を表示するクラス
 */
export default class DateAndNumber {
  /**
   * @param {JSON} json 
   */
  constructor(json) {
    this.date = new Date(Date.parse(json["date"]));
    this.validUntil = new Date(Date.parse(json["validUntil"]));
    this.delivery = new Date(Date.parse(json["delivery"]));
    this.dateP = document.createElement("p");
    this.noP = document.createElement("p");
    this.validUntilDd = document.createElement("dd");
    this.deliveryDd = document.createElement("dd");
    this.paymentMethodDd = document.createElement("dd");

    this.dateP.textContent = this.getStringDate(this.date);
    this.noP.textContent = "見積番号：" + json["no"];

    this.validUntilDd.textContent = this.getStringDate(this.validUntil);
    this.deliveryDd.textContent = this.getStringDate(this.delivery);
    this.paymentMethodDd.textContent = json["paymentMethod"];

    this.dateAndNumber = document.getElementById("date-and-number");
    this.remarks = document.getElementById("remarks");
    this.validUntilDt = document.createElement("dt");
    this.deliveryDt = document.createElement("dt");
    this.paymentMethodDt = document.createElement("dt");
    this.validUntilDt.textContent = "有効期限";
    this.deliveryDt.textContent = "納期";
    this.paymentMethodDt.textContent = "支払条件";
    this.remove();
  }
  show() {
    this.dateAndNumber.appendChild(this.dateP);
    this.dateAndNumber.appendChild(this.noP);
    this.remarks.appendChild(this.validUntilDt);
    this.remarks.appendChild(this.validUntilDd);
    this.remarks.appendChild(this.deliveryDt);
    this.remarks.appendChild(this.deliveryDd);
    this.remarks.appendChild(this.paymentMethodDt);
    this.remarks.appendChild(this.paymentMethodDd);
  }
  remove() {
    this.dateAndNumber.innerHTML = "";
    this.remarks.innerHTML = "";
  }
  /**
   * Date型から文字列を生成するメソッド
   * @param {Date} d
   * @return {string} YYYY年MM月DD日
   */
  getStringDate(d) {
    return d.getFullYear() + "年" + d.getMonth() + "月" + d.getDate() + "日";
  }
}
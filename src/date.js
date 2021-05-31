/**
 * 作成日、有効期限等を表示するクラス
 */
export default class DateAndNumber {
  /**
   * @param {JSON} json 
   * @param {JSON} company
   * @param {number} type
   */
  constructor(json,company,type) {
    this.type = type;
    this.quotationDate = new Date(Date.parse(json["quotationDate"]));
    this.deliveryDate = new Date(Date.parse(json["deliveryDate"]));
    this.invoiceDate = new Date(Date.parse(json["invoiceDate"]));
    this.validUntil = new Date(Date.parse(json["validUntil"]));
    this.deliveryDue = new Date(Date.parse(json["deliveryDue"]));
    this.paymentDue = new Date(Date.parse(json["paymentDue"]));

    this.bank = company["bank"];
    this.branch = company["branch"];
    this.accountNumber = company["accountNumber"];
    this.accountHolder = company["accountHolder"];

    this.dateP = document.createElement("p");
    this.noP = document.createElement("p");
    this.validUntilDd = document.createElement("dd");
    this.deliveryDueDd = document.createElement("dd");
    this.paymentMethodDd = document.createElement("dd");
    this.paymentDueDd = document.createElement("dd");
    this.bankDd = document.createElement("dd");
    switch(type) {
      case 1 :
        this.dateP.textContent = this.getStringDate(this.quotationDate);
        this.noP.textContent = "見積番号：" + json["no"];
        break;
      case 2 :
        this.dateP.textContent = this.getStringDate(this.deliveryDate);
        this.noP.textContent = "注文番号：" + json["no"];
        break;
      case 3 :
        this.dateP.textContent = this.getStringDate(this.invoiceDate);
        this.noP.textContent = "注文番号：" + json["no"];
        break;
    }


    this.validUntilDd.textContent = this.getStringDate(this.validUntil);
    this.deliveryDueDd.textContent = this.getStringDate(this.deliveryDue);
    this.paymentDueDd.textContent = this.getStringDate(this.paymentDue);
    this.paymentMethodDd.textContent = json["paymentMethod"];

    this.bankDd.innerHTML = this.bank + "　" + this.branch + "<br><br>" 
    + "口座番号　" + this.accountNumber + "<br><br>"
    + "口座名義　" + this.accountHolder;

    this.dateAndNumber = document.getElementById("date-and-number");
    this.remarks = document.getElementById("remarks");
    this.validUntilDt = document.createElement("dt");
    this.deliveryDueDt = document.createElement("dt");
    this.paymentMethodDt = document.createElement("dt");
    this.paymentDueDt = document.createElement("dt");
    this.bankDt = document.createElement("dt");
    this.validUntilDt.textContent = "有効期限";
    this.deliveryDueDt.textContent = "納期";
    this.paymentMethodDt.textContent = "支払条件";
    this.paymentDueDt.textContent = "お支払期限";
    this.bankDt.textContent = "お支払先";
    this.remove();
  }
  show() {
    this.dateAndNumber.appendChild(this.dateP);
    this.dateAndNumber.appendChild(this.noP);

    switch(this.type) {
      case 1 :
        this.remarks.appendChild(this.validUntilDt);
        this.remarks.appendChild(this.validUntilDd);
        this.remarks.appendChild(this.deliveryDueDt);
        this.remarks.appendChild(this.deliveryDueDd);
        this.remarks.appendChild(this.paymentMethodDt);
        this.remarks.appendChild(this.paymentMethodDd);
        break;
      case 2 :

        break;
      case 3 :
        this.remarks.appendChild(this.paymentDueDt);
        this.remarks.appendChild(this.paymentDueDd);
        this.remarks.appendChild(this.bankDt);
        this.remarks.appendChild(this.bankDd);
        break;
    }
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
    /**
     * 
     * @param {Date} d
     * @return {number} 
     */
    const getMonthNumber = function(d) {
      return d.getMonth() + 1;
    }
    return d.getFullYear() + "年" + getMonthNumber(d) + "月" + d.getDate() + "日";
  }
}
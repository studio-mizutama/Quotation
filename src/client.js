/**
 * クライアント情報を表示するクラス
 */
export default class ClientCompany {
  /**
   * 
   * @param {JSON} json 
   * @param {number} type
   * @param {string} grandTotal 
   */
  constructor(json,type, grandTotal) {
    this.name = document.createElement("h2");
    this.title = document.createElement("h3");
    this.total = document.createElement("h2");
    this.name.textContent = json["name"] + "　御中";
    this.title.textContent = "件名：　" + json["title"];
    this.p = document.createElement("p");
    switch(type) {
      case 1:
        this.total.textContent = "お見積金額：　" + grandTotal + " 円";
        this.p.textContent = "下記の通り、お見積もり申し上げます。";
        break;
      case 2:
        this.total.textContent = "合計金額：　" + grandTotal + " 円";
        this.p.textContent = "下記の通り、納品いたします。";
        break;
      case 3:
        this.total.textContent = "ご請求金額：　" + grandTotal + " 円";
        this.p.textContent = "下記の通り、ご請求申し上げます。";
        break;
    }
    this.headerLeft = document.getElementById("header-left");
    this.remove();
  }
  show() {
    this.headerLeft.appendChild(this.name);
    this.headerLeft.appendChild(this.title);
    this.headerLeft.appendChild(this.p);
    this.headerLeft.appendChild(this.total);
  }
  remove() {
    this.headerLeft.innerHTML = "";
  }
}
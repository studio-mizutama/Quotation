/**
 * クライアント情報を表示するクラス
 */
export default class ClientCompany {
  /**
   * 
   * @param {JSON} json 
   * @param {string} grandTotal 
   */
  constructor(json, grandTotal) {
    this.name = document.createElement("h2");
    this.title = document.createElement("h3");
    this.total = document.createElement("h2");
    this.name.textContent = json["name"] + "　御中";
    this.title.textContent = "件名：　" + json["title"];
    this.total.textContent = "お見積金額：　" + grandTotal + " 円";
    let p = document.createElement("p");
    p.textContent = "下記の通り、お見積もり申し上げます。";
    let headerLeft = document.getElementById("header-left");
    headerLeft.appendChild(this.name);
    headerLeft.appendChild(this.title);
    headerLeft.appendChild(p);
    headerLeft.appendChild(this.total);
  }
}
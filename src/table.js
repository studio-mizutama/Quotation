/**
 * 見積テーブルを作成するクラス
 */
export default class QuotationTable {
  /**
   * @param {JSON} json 
   */
  constructor(json){
    /**
      * @type {HTMLDocument} Table要素
      */
    let table = document.createElement("table");
    /**
     * @type {HTMLDocument} tr要素
     */
    let tr = document.createElement("tr");
    for (const key in json[0]) {
      let th = document.createElement("th");
      th.textContent = key;
      tr.appendChild(th);
      }

    /**
     * @type {HTMLDocument} th要素　金額
     */
    let th = document.createElement("th");
    th.textContent = "金額"
    tr.appendChild(th);
    table.appendChild(tr);

    /**
     * @type {number} 小計
     */
    this.subTotal = 0;

    /**
     * @type {number} 消費税
     */
    this.tax = 0;

    /**
     * @type {number} 合計
     */
    this.grandTotal = 0;

    for (let i = 0; i < json.length; i++) {
      let tr = document.createElement("tr");
      for (const key in json[0]) {
            let td = document.createElement("td");
            (key == "単価")? td.textContent = this.comma(json[i][key]): td.textContent = json[i][key];
            tr.appendChild(td);
          }
      let td = document.createElement("td");
      let total = JSON.parse(json[i]["数量"]) * JSON.parse(json[i]["単価"]);
      this.subTotal += total;
      td.textContent = this.comma(total);
      tr.appendChild(td);
      table.appendChild(tr);
    }

    this.tax = Math.round(this.subTotal * 0.1);
    this.grandTotal = this.subTotal + this.tax;

    for (let i = 0; i < 4; i++) {
      let tr = document.createElement("tr");
      for (let j = 0; j < 5; j++) {
        let td = document.createElement("td");
        switch (j) {
          case 0 :
            switch (i) {
              case 0 : 
                td.textContent = "　";
                break;
              case 1 :
                td.textContent = "小計";
                break;
              case 2 :
                td.textContent = "消費税（10%）";
                break;
              case 3 :
                td.textContent = "合計";
                break;
            }
            break;
          case 1 :
            td.textContent = "";
            break;
          case 2 :
            td.textContent = "";
            break;
          case 3 :
            td.textContent = "";
            break;
          case 4 :
            switch (i) {
              case 0 : 
                td.textContent = "";
                break;
              case 1 :
                td.textContent = this.comma(this.subTotal);
                break;
              case 2 :
                td.textContent = this.comma(this.tax);
                break;
              case 3 :
                td.textContent = this.comma(this.grandTotal);
                break;
            }
            break;
        }
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    document.getElementById("table-container").appendChild(table);
  }

  /**
   * 数値を3桁カンマ区切りにするメソッド
   * @param {number | string} n
   */
  comma(n) {
    return String(n).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }
}
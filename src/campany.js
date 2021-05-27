/**
 * 会社情報を表示するクラス
 */
export default class MyCompany {
  /**
   * @param {JSON} json 
   */
  constructor(json){
    this.logo = document.createElement("p");
    this.logoImg = document.createElement("img");
    this.stampImg = document.createElement("img");
    this.name = document.createElement("p");
    this.zipCode = document.createElement("p");
    this.address = document.createElement("p");
    this.tel = document.createElement("p");

    let headerRight = document.getElementById("header-right");
    
    this.logoImg.setAttribute("src", json["logoPath"]);
    this.stampImg.setAttribute("src", json["stampPath"]);
    this.logoImg.style.width = "100%";
    this.stampImg.style.zIndex = 2;
    this.stampImg.style.position = "absolute";
    this.stampImg.style.width = "21mm";
    this.stampImg.style.left = "58mm";
    this.stampImg.style.top = "36mm";
    this.logo.appendChild(this.logoImg);
    this.name.textContent = json["name"];
    this.zipCode.textContent = "〒" + json["zipCode"];
    this.address.textContent = json["address"];
    this.tel.textContent = "TEL: " + json["tel"];

    headerRight.appendChild(this.logo);
    headerRight.appendChild(this.name);
    headerRight.appendChild(this.zipCode);
    headerRight.appendChild(this.address);
    headerRight.appendChild(this.tel);
    headerRight.appendChild(this.stampImg);
    headerRight.style.position = "relative";
  }
}
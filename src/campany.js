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
    this.sealImg = document.createElement("img");
    this.name = document.createElement("p");
    this.zipCode = document.createElement("p");
    this.address = document.createElement("p");
    this.tel = document.createElement("p");

    this.headerRight = document.getElementById("header-right");
    
    this.logoImg.setAttribute("alt", "");
    this.logoImg.setAttribute("src", json["logoPath"]);
    this.sealImg.setAttribute("alt", "");
    this.sealImg.setAttribute("src", json["sealPath"]);
    this.logoImg.style.maxWidth = "100%";
    this.logoImg.style.maxHeight = "10mm";
    this.sealImg.style.zIndex = 2;
    this.sealImg.style.position = "absolute";
    this.sealImg.style.width = "21mm";
    this.sealImg.style.left = "58mm";
    this.sealImg.style.top = "36mm";
    this.logo.appendChild(this.logoImg);
    this.name.textContent = json["name"];
    this.zipCode.textContent = "〒" + json["zipCode"];
    this.address.textContent = json["address"];
    this.tel.textContent = "TEL: " + json["tel"];

    this.headerRight.style.position = "relative";

    this.remove();
  }
  show() {
    this.headerRight.appendChild(this.logo);
    this.headerRight.appendChild(this.name);
    this.headerRight.appendChild(this.zipCode);
    this.headerRight.appendChild(this.address);
    this.headerRight.appendChild(this.tel);
    this.headerRight.appendChild(this.sealImg);
  }
  remove() {
    this.headerRight.innerHTML = "";
  }
}
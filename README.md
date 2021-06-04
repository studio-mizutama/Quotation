# QUOTATION [\[DEMO SITE\]](https://studio-mizutama.github.io/Quotation/)

Easy tool for making quotation.

## Usage

### Make `cofig/config.js`

Write your company's information in `cofig/config.js`.

```js
const company = 
  {
    "name": "<Your company name>",
    "zipCode": "",
    "address": "",
    "tel": "",
    "logoPath": "./images/logo.svg",
    "sealPath": "./images/seal.svg",
    "bank": "＊＊銀行",
    "branch": "＊＊支店",
    "typeOfAccount": "普通",
    "accountNumber": "111-1111111",
    "accountHolder": ""
  };

export default company;
```

### Set Images

Save your campany's logo and seal images to `images/`.

### Make `json` file

Make `json` file like this format.

```json
{
  "details": [
  {
    "description": "",
    "quantity": 1,
    "unit": "式",
    "price": 100
  },
  {
    "description": "",
    "quantity": 1,
    "unit": "式",
    "price": 100
  }
],
"client":
  {
    "name": "<Client name>",
    "title": "<Title>"
  },
"dateAndNumbers": 
  {
    "date": "2021年5月27日",
    "no": "2021-05-27-01",
    "validUntil": "2021年6月10日",
    "delivery": "2021年6月30日",
    "payment": "月末締め翌月末払い"
  }
}
```

## Run

This app uses ESmodules. So you shoud run local server to use this app.

for example

```sh
$ python3 -m http.server
```
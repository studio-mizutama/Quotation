# QUOTATION

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
    "sealPath": "./images/seal.svg"
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
    "項目": "",
    "数量": 1,
    "単位": "式",
    "単価": 100
  },
  {
    "項目": "",
    "数量": 1,
    "単位": "式",
    "単価": 100
  },
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
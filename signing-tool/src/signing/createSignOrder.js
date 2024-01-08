import getToken from "./getToken";

function createSigningOrder() {

    getToken()

    const token = localStorage.getItem("token")


    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);
var raw = JSON.stringify({
  "title": "No Scam",
  "description": "Marius Document",
  "externalId": "ae7b9ca7-3839-4e0d-a070-9f14bffbbf55",
  "dataToSign": {
    "base64Content": "VEhpcyBpcyBhIGRvY3VtZW50",
    "fileName": "this.txt",
    "convertToPDF": "true"
  },
  "contactDetails": {
    "email": "test@test.com"
  },
  "signers": [
    {
      "externalSignerId": "uoiahsd321982983jhrmnec2wsadm32",
      "redirectSettings": {
        "redirectMode": "redirect",
        "error": "http://localhost:3000/",
        "cancel": "http://localhost:3000/",
        "success": "http://localhost:3000/"
      },
      "signatureType": {
        "signatureMethods": [
          "no_bankid_oidc"
        ],
        "mechanism": "identification"
      },
      "signerInfo": {
        "mobile": {
          "countryCode": "+47",
          "number": "93821738"
        }
      }
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.signicat.com/express/sign/documents", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export default createSigningOrder;
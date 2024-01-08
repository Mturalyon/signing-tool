function getToken() {
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic c2FuZGJveC1oYXJlYnJhaW5lZC1oYW1tZXItNjQxOlFUUmJUUWRwU3IxV2FYM1F1VmRaS2NraUNMUHBPSmdOajA4cks3NFhldFppRXdIdA==");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials");
urlencoded.append("scope", "signicat-api");
urlencoded.append("client_id", "sandbox-harebrained-hammer-641");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};


   fetch("https://api.signicat.com/auth/open/connect/token", requestOptions)
    .then(response => response.text())
    .then(result => {
      var json = JSON.parse(result);
      var token = json.access_token;
      localStorage.setItem("token", JSON.stringify(token))
    })
    .catch(error => console.log('error', error));

}

export default getToken;
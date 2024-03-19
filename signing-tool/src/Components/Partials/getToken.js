import { clientId, clientSecret, tokenUrl } from "./credentials";

function getToken() {
    localStorage.clear();

    const encodedCredentials = btoa(clientId + ":" + clientSecret)

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${encodedCredentials}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("scope", "signicat-api");
    urlencoded.append("client_id", `${clientId}`);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow"
};

fetch(`${tokenUrl}`, requestOptions)
  .then((response) => response.text())
  .then((result) => {
    const parsedObject = JSON.parse(result)
    console.log(parsedObject.access_token)
    localStorage.setItem("token", parsedObject.access_token);
})
  
  .catch((error) => console.error(error));
}

export default getToken;
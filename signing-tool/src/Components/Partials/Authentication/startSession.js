import { startSessionUrl } from "../credentials";

function startSession () {
   const token = localStorage.getItem("token")
  console.log("New Token: " + token)



const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

const raw = JSON.stringify({
  "allowedProviders": [
    "sbid"
  ],
  "language": "en",
  "flow": "redirect",
  "requestedAttributes": [
    "dateOfBirth",
    "nin",
    "firstName",
    "lastName"
  ],
  "sessionLifetime": 600,
  "externalReference": "This is my reference",
  "callbackUrls": {
    "success": "https://oidcdebugger.com/debug",
    "abort": "https://oidcdebugger.com/debug",
    "error": "https://oidcdebugger.com/debug"
  }
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(startSessionUrl, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

export default startSession;
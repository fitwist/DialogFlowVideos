var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
var token = "6238fde31b716a1f1c7e6787c17b2f45f1017a04";
var query = "7707083893";

var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({ query: query })
}

console.log(response.text())
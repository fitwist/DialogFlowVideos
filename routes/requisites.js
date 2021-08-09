var express = require('express');
var axios = require('axios');
var router = express.Router();
var json = require('json')

router.post('/', function(req, res) {
    let taxId = req.body.queryResult.parameters["taxId"];
    let url = `https://api-fns.ru/api/egr?req=${taxId}&key=5b0c3c6378a0e247e5c1d33da40855d840d0f82e`;

    axios.get(url).then(aRes => {
        let activity = JSON.stringify(aRes.data);
        console.log(aRes.data.items['ОснВидДеят']);

        let textResponse = `Для ИНН ${taxId} основной вид деятельности: ${activity}`;
        res.send(createTextResponse(textResponse));

    }).catch(err => {
        console.log(err);
    })
});

function createTextResponse(textResponse) {
    let response = {
        "fulfillmentText": "This is a text response",
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    textResponse
                ]
            }
        }],
        "source": "example.com",
        "payload": {
            "google": {
                "expectUserResponse": true,
                "richResponse": {
                    "items": [{
                        "simpleResponse": {
                            "textToSpeech": "this is a simple response"
                        }
                    }]
                }
            },
            "facebook": {
                "text": "Hello, Facebook!"
            },
            "slack": {
                "text": "This is a text response for Slack."
            }
        }
    }
    return response;
}


module.exports = router;
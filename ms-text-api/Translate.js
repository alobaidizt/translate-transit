'use strict';

let fs = require ('fs');
let https = require ('https');

// **********************************************
// *** Update or verify the following values. ***
// **********************************************

// Replace the subscriptionKey string value with your valid subscription key.
let subscriptionKey = '87b041bf47154c54b30bb6b3d1c1d537';

let host = 'api.cognitive.microsofttranslator.com';
let path = '/translate?api-version=3.0';

// Translate to Chinese and German.
let params = '&to=cn&to=de';

let text = 'Hello, world!';

// let response_handler = function (response) {
//     let body = '';
//     response.on ('data', function (d) {
//         body += d;
//     });
//     response.on ('end', function () {
//         let json = JSON.stringify(JSON.parse(body), null, 4);
//         console.log(json);
//     });
//     response.on ('error', function (e) {
//         console.log ('Error: ' + e.message);
//     });
// };

let get_guid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

let Translate = function (content) {
    let request_params = {
        method : 'POST',
        hostname : host,
        path : path + params,
        headers : {
            'Content-Type' : 'application/json',
            'Ocp-Apim-Subscription-Key' : subscriptionKey,
            'X-ClientTraceId' : get_guid (),
        }
    };

    let req = https.request(request_params, response_handler);
    req.write (content);
    req.end ();
}

let content = JSON.stringify ([{'Text' : text}]);

Translate (content);

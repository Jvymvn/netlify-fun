const axios = require("axios");

exports.handler = function(event, context, callback) {
    const parsedReqBody = JSON.parse(event.body);
    console.log("Parsed", parsedReqBody.name);
    axios({
        method:'post',
        url: 'https://enoj6yjcrrt8qep.m.pipedream.net',
        data: {name: parsedReqBody.name}
    }).then((res) => {
        callback(null, {
            statusCode: 200,
            body: `Hello, ${parsedReqBody.name}!`
            });
    }).catch((err) => {
        console.log(err);
        callback(new Error("Something went wrong."))
    })
}
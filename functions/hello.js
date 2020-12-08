// functions/hello.js
exports.handler = async event => {
    //Accepts parameter "name" or defaults to "World"
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: `Hello ${subject}!`,
    }
  }
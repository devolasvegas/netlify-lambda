exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg:
        "Hieee. I am being pulled in using a lambda function and the fetch API.",
    }),
  })
  console.log(context)
}

exports.handler = function(event, context, callback) {
  const { identity, user } = context.clientContext
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg:
        "Hieee. I am being pulled in using a lambda function and the fetch API.",
      identity: `${identity}`,
      user: `${user}`,
    }),
  })
  console.log(identity, user)
}

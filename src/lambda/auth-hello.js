exports.handler = (event, context, callback) => {
  if (context.clientContext) {
    const { user } = context.clientContext
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: `auth-hello: ${Math.round(Math.random() * 10)}`,
        user,
      }),
    })
  } else {
    console.log(`Note that netlify-lambda only locally emulates Netlify Functions, 
    while netlify-identity-widget interacts with a real Netlify Identity instance. 
    This means that netlify-lambda doesn't support Netlify Functions + Netlify Identity`)
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: `Note that netlify-lambda only locally emulates Netlify Functions, 
    while netlify-identity-widget interacts with a real Netlify Identity instance. 
    This means that netlify-lambda doesn't support Netlify Functions + Netlify Identity`,
      }),
    })
  }
}

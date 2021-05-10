const { WebClient } = require('@slack/web-api')

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = 'xoxb-1286289446522-1210517334261-mMQR0lpq4sqPynV95V2VVnt9'
const web   = new WebClient(token)

web.users
   .list({})
   .then((res) => {
       console.log(res)
   })
   .catch((err) => console.log(err))
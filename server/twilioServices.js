require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const sendSms = async (to, body, callback) => {
  console.log("sendSms", to, body);
  await client.messages
    .create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    })
    .then((message) => {
      console.log(message.sid, "Message sent successfully!");
      console.log("Message SID: ", message.sid);
      callback(null, message);
    })
    .catch((err) => {
      console.log("Error sending message: ", err);
      callback(err, null);
    });
};

const pollExampleMessageFormat = () => {
  return exampleMessage;
};

const exampleMessage = {
  account_sid: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  api_version: "2010-04-01",
  body: "This is the ship that made the Kessel Run in fourteen parsecs?",
  date_created: "Thu, 30 Jul 2015 20:12:31 +0000",
  date_sent: "Thu, 30 Jul 2015 20:12:33 +0000",
  date_updated: "Thu, 30 Jul 2015 20:12:33 +0000",
  direction: "outbound-api",
  error_code: null,
  error_message: null,
  from: "+15017122661",
  messaging_service_sid: null,
  num_media: "0",
  num_segments: "1",
  price: null,
  price_unit: null,
  sid: "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  status: "sent",
  subresource_uris: {
    media:
      "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json",
  },
  to: "+15558675310",
  uri: "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json",
};

// interface TwilioMessage {
//   account_sid: string | null;
//   api_version: string | null;
//   body: string | null;
//   date_created: string | null;
//   date_sent: string | null;
//   date_updated: string | null;
//   direction: string | null;
//   error_code: string | null;
//   error_message: string | null;
//   from: string | null;
//   messaging_service_sid: string | null;
//   num_media: string | null;
//   num_segments: string | null;
//   price: string | null;
//   price_unit: string | null;
//   sid: string | null;
//   status: string | null;
//   subresource_uris: {
//     media: string | null;
//   };
//   to: string | null;
//   uri: string | null;
// }

exports.sendSms = sendSms;
exports.pollExampleMessageFormat = pollExampleMessageFormat;
// module.exports = {
//   sendSms,
//   pollExampleMessageFormat,
// };

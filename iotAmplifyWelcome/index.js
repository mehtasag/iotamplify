const AWS = require("aws-sdk");
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
const sgMail = require("@sendgrid/mail");
const { v4: uuidv4 } = require("uuid");

sgMail.setApiKey(
  "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"
);

exports.handler = async (event, context, callback) => {
  console.log(event);

  if (event.request.userAttributes.email) {
    const msg = {
      to: event.request.userAttributes.email, // Change to your recipient
      from: {
        name: "Welcome to Amplify Blogs",
        email: "mehtasagar95@gmail.com", // Change to your verified sender
      },
      templateId: "d-1b2358ae05c143deb28c9b6bf20faec4",
      dynamicTemplateData: {
        userName: event.userName,
      },
    };

    const addData = async () => {
      const userData = {
        TableName: "User-6r5tha5hgndzdfhaknotyn3yse-dev",

        Item: {
          id: uuidv4(),
          username: event.request.userAttributes.name,
          name: event.request.userAttributes.name,
          email: event.request.userAttributes.email,
          owner: event.request.userAttributes.sub,
          createdAt: new Date().getTime(),
        },
      };

      await dynamoDbClient.put(userData).promise();
    };

    addData();

    sgMail.send(msg);
  }

  // Return to Amazon Cognito
  callback(null, event);
};

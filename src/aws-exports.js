const awsmobile = {
  aws_project_region: process.env.REACT_APP_PROJECT_REGION,
  aws_cognito_identity_pool_id: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.REACT_APP_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_WEB_CLIENT_ID,
  oauth: {},
  aws_cognito_username_attributes: [],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["EMAIL"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: ["SMS"],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_GRAPHQL_URL,
  aws_appsync_region: process.env.REACT_APP_APPSYNC_REGION,
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: process.env.REACT_APP_APPSYNC_API_KEY,
  aws_user_files_s3_bucket: process.env.REACT_APP_S3_BUCKET,
  aws_user_files_s3_bucket_region: process.env.REACT_APP_S3_BUCKET_REGION,
};

export default awsmobile;

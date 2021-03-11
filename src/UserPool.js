import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "YOUR_USERPOOL_ID",
    ClientId: "YOUR_CLIENT_ID"
    
}

export default new CognitoUserPool(poolData);
import React from "react";
import { FacebookProvider, LoginButton } from "react-facebook";

const FacebookButton = () => {
  const responseFacebook = (response) => {
    console.log(response); // Handle the response from Facebook here
  };

  return (
    <FacebookProvider appId="1026533201790605">
      <LoginButton
        fields="name,email,picture"
        onCompleted={responseFacebook}
        onError={(error) => console.log("Facebook login error:", error)}
      >
        Login with Facebook
      </LoginButton>
    </FacebookProvider>
  );
};

export default FacebookButton;

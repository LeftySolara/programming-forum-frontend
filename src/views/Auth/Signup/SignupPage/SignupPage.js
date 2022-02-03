import React from "react";

import SignupForm from "views/Auth/Signup/SignupForm/SignupForm";

import * as S from "./SignupPage.styles";

const SignupPage = () => {
  return (
    <S.PageContainer>
      <SignupForm />
    </S.PageContainer>
  );
};

export default SignupPage;

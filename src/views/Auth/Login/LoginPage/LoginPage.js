import React from "react";

import LoginForm from "views/Auth/Login/LoginForm/LoginForm";

import * as S from "./LoginPage.styles";

const LoginPage = () => {
  return (
    <S.PageContainer>
      <LoginForm />
    </S.PageContainer>
  );
};

export default LoginPage;

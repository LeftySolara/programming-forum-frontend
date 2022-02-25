import React from "react";

import BoardCategoryList from "views/Home/BoardCategoryList/BoardCategoryList";

import * as S from "./HomePage.styles";

const HomePage = () => {
  return (
    <S.PageContainer>
      <BoardCategoryList />
    </S.PageContainer>
  );
};

export default HomePage;

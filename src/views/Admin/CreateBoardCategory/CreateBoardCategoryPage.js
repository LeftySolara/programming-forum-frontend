import React from "react";

import { createBoardCategory } from "api/services/boardCategories";
import CreateBoardCategoryForm from "./CreateBoardCategoryForm";

import * as S from "./CreateBoardCategoryPage.styles";

const CreateBoardCategoryPage = () => {
  return (
    <S.PageContainer>
      <h1>Create Board Category</h1>
      <CreateBoardCategoryForm onSubmit={createBoardCategory} />
    </S.PageContainer>
  );
};

export default CreateBoardCategoryPage;

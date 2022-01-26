import React from "react";
import CreateBoardCategoryForm from "./CreateBoardCategoryForm";

import * as S from "./CreateBoardCategoryPage.styles";

import createBoardCategory from "../../../services/api/boardCategories";

const CreateBoardCategoryPage = () => {
  return (
    <S.PageContainer>
      <h1>Create Board Category</h1>
      <CreateBoardCategoryForm onSubmit={createBoardCategory} />
    </S.PageContainer>
  );
};

export default CreateBoardCategoryPage;

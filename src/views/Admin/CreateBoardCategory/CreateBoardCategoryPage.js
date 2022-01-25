import React from "react";
import CreateBoardCategoryForm from "./CreateBoardCategoryForm";

import * as S from "./CreateBoardCategoryPage.styles";

const CreateBoardCategoryPage = () => {
  return (
    <S.PageContainer>
      <h1>Create Board Category</h1>
      <CreateBoardCategoryForm onSubmit={() => console.log("submitted")} />
    </S.PageContainer>
  );
};

export default CreateBoardCategoryPage;

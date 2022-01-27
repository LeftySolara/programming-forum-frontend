import { Typography } from "@mui/material";
import React from "react";
import CreateBoardForm from "./CreateBoardForm";

import * as S from "./CreateBoardPage.styles";

const CreateBoardPage = () => {
  return (
    <S.PageContainer>
      <Typography variant="h2" component="h2">
        Create Board
      </Typography>
      <CreateBoardForm />
    </S.PageContainer>
  );
};

export default CreateBoardPage;

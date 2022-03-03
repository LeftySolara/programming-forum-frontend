import React from "react";
import { Typography } from "@mui/material";
import PostThreadForm from "../PostThreadForm/PostThreadForm";

import * as S from "./PostThreadPage.styles";

const PostThreadPage = () => {
  return (
    <S.PageContainer>
      <Typography variant="h5" component="h2">
        Post New Thread
      </Typography>
      <PostThreadForm />
    </S.PageContainer>
  );
};

export default PostThreadPage;

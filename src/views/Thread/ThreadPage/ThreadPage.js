import React from "react";

import { CircularProgress, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import useAxios from "hooks/useAxios";

import PostList from "../PostList/PostList";

import * as S from "./ThreadPage.styles";

const ThreadPage = () => {
  const { id } = useParams();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `/threads/${id}`,
  });

  return (
    <S.PageContainer>
      {loading || !response ? (
        <CircularProgress />
      ) : (
        <>
          {error && error.message}
          <Typography
            variant="h4"
            component="h3"
            sx={{ margin: "20px 20px 20px 0px" }}
          >
            {response.thread.topic}
          </Typography>
          <PostList threadId={id} />
        </>
      )}
    </S.PageContainer>
  );
};

export default ThreadPage;

import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";

import useAxios from "hooks/useAxios";
import ThreadList from "../ThreadList/ThreadList";

import BoardBreadcrums from "../Breadcrumbs/Breadcrumbs";

import * as S from "./BoardPage.styles";

const BoardPage = () => {
  const { id } = useParams();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `/boards/${id}`,
  });

  return (
    <S.PageContainer>
      {loading || !response ? (
        <CircularProgress />
      ) : (
        <S.ListContainer>
          <S.Header>
            <BoardBreadcrums location={response.board.topic} id={id} />
            <Link to={`/board/${id}/post-thread`}>
              <Button variant="contained" type="button">
                Post New Thread
              </Button>
            </Link>
          </S.Header>
          {error && error.message}
          <ThreadList />
        </S.ListContainer>
      )}
    </S.PageContainer>
  );
};

export default BoardPage;

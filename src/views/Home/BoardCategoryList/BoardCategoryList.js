import React, { useEffect, useState } from "react";

import useAxios from "hooks/useAxios";
import { getBoardsByCategory } from "api/services/board";

import { CircularProgress, Typography } from "@mui/material";

import BoardList from "../BoardList/BoardList";

import * as S from "./BoardCategoryList.styles";

const BoardCategoryList = () => {
  const [boardMaps, setBoardMaps] = useState([]);

  const {
    response: categories,
    error,
    loading,
  } = useAxios({
    method: "GET",
    url: "/boardCategories",
  });

  useEffect(() => {
    if (categories) {
      categories.forEach((category) => {
        getBoardsByCategory(category._id).then((res) => {
          setBoardMaps((maps) => [
            ...maps,
            { category, boards: res.data.boards },
          ]);
        });
      });
    }
  }, [categories]);

  return (
    <S.BoardCategoryListContainer>
      {loading || boardMaps.length === 0 ? (
        <CircularProgress />
      ) : (
        <div>
          {error && error.message}
          {boardMaps &&
            boardMaps
              .sort(
                (map1, map2) =>
                  map1.category.sortOrder > map2.category.sortOrder,
              )
              .map((map) => {
                return (
                  <>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{ marginTop: "35px" }}
                    >
                      {map.category.topic}
                    </Typography>
                    <hr />
                    <BoardList boards={map.boards} />
                  </>
                );
              })}
        </div>
      )}
    </S.BoardCategoryListContainer>
  );
};

export default BoardCategoryList;

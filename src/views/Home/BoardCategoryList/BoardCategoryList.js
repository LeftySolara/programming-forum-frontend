import React, { useEffect, useState } from "react";

import useAxios from "hooks/useAxios";
import { getBoardsByCategory } from "api/services/board";

import { CircularProgress, Typography } from "@mui/material";

import BoardList from "../BoardList/BoardList";

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
    <div>
      {loading || boardMaps.length === 0 ? (
        <CircularProgress />
      ) : (
        <div>
          {error && error.message}
          {boardMaps &&
            boardMaps.map((map) => {
              return (
                <>
                  <Typography variant="h3" component="h2">
                    {map.category.topic}
                  </Typography>
                  <hr />
                  <BoardList boards={map.boards} />
                </>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default BoardCategoryList;

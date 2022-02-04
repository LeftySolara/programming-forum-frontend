import React, { useEffect, useState } from "react";

import useAxios from "hooks/useAxios";
import { getBoardsByCategory } from "api/services/board";

import { CircularProgress } from "@mui/material";

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
                <div key={map.category._id}>
                  <h2>{map.category.topic}</h2>
                  <BoardList boards={map.boards} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default BoardCategoryList;

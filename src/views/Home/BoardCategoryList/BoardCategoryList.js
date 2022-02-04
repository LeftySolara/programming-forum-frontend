import React, { useEffect, useState } from "react";

import useAxios from "hooks/useAxios";
import { getBoardsByCategory } from "api/services/board";

import { CircularProgress } from "@mui/material";

import BoardListItem from "../BoardListItem/BoardListItem";

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
                  <ul>
                    {map.boards.map((board) => (
                      <BoardListItem
                        id={board._id}
                        topic={board.topic}
                        description={board.description}
                      />
                    ))}
                  </ul>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default BoardCategoryList;

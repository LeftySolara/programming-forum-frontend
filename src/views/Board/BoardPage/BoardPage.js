import React from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";

import useAxios from "hooks/useAxios";

const BoardPage = () => {
  const { id } = useParams();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `/boards/${id}`,
  });

  return (
    <div>
      {loading || !response ? (
        <CircularProgress />
      ) : (
        <div>
          {error && error.message}
          <Typography variant="h3" component="h1">
            {response.board.topic}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default BoardPage;

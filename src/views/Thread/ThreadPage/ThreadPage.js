import React from "react";

import { CircularProgress, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import useAxios from "hooks/useAxios";

const ThreadPage = () => {
  const { id } = useParams();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `/threads/${id}`,
  });

  return (
    <div>
      {loading || !response ? (
        <CircularProgress />
      ) : (
        <div>
          {error && error.message}
          <Typography variant="h3" component="h3">
            {response.thread.topic}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default ThreadPage;

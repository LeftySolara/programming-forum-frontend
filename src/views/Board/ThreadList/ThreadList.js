import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { CircularProgress } from "@mui/material";

import useAxios from "hooks/useAxios";

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  const location = useLocation();
  const boardId = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1,
  );

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `/threads/board/${boardId}`,
  });

  useEffect(() => {
    if (response) {
      response.threads.forEach((thread) => {
        setThreads((threadList) => [...threadList, thread]);
      });
    }
  }, [response]);

  return (
    <div>
      {loading || threads.length === 0 ? (
        <CircularProgress />
      ) : (
        <div>
          {error && error.message}
          {threads && threads.map((thread) => <p>{thread.topic}</p>)}
        </div>
      )}
    </div>
  );
};

export default ThreadList;

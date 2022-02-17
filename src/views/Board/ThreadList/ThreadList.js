import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { CircularProgress } from "@mui/material";

import useAxios from "hooks/useAxios";
import ThreadListItem from "../ThreadListItem/ThreadListItem";

import * as S from "./ThreadList.styles";

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
          <S.List>
            {threads &&
              threads.map((thread) => (
                <ThreadListItem id={thread.id} topic={thread.topic} />
              ))}
          </S.List>
        </div>
      )}
    </div>
  );
};

export default ThreadList;

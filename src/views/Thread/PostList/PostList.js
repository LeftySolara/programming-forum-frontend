import React, { useEffect, useState } from "react";

import { CircularProgress, Paper } from "@mui/material";

import useAxios from "hooks/useAxios";

import PostListItem from "../PostListItem/PostListItem";
import ReplyForm from "../ReplyForm/ReplyForm";

import * as S from "./PostList.styles";

const PostList = (props) => {
  const { threadId } = props;

  const [posts, setPosts] = useState([]);

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `/posts/thread/${threadId}`,
  });

  useEffect(() => {
    if (response) {
      response.posts.forEach((post) => {
        setPosts((postList) => [...postList, post]);
      });
    }
  }, [response]);

  return (
    <div>
      {loading || posts.length === 0 ? (
        <CircularProgress />
      ) : (
        <>
          <S.PostListContainer>
            {error && error.message}
            <Paper elevation={3} sx={{ width: "98%" }}>
              <S.List>
                {posts &&
                  posts.map((post) => (
                    <PostListItem
                      content={post.content}
                      author={post.author.username}
                      date={post.dateCreated}
                      key={post.dateCreated}
                    />
                  ))}
              </S.List>
            </Paper>
          </S.PostListContainer>
          <S.PostListContainer>
            <Paper elevation={3} sx={{ width: "98%", marginTop: "30px" }}>
              <ReplyForm threadId={threadId} />
            </Paper>
          </S.PostListContainer>
        </>
      )}
    </div>
  );
};

export default PostList;

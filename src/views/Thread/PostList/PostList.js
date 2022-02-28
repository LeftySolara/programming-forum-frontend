import React, { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";

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
    <S.PostListContainer>
      {loading || posts.length === 0 ? (
        <CircularProgress />
      ) : (
        <>
          <S.PostListContainer>
            {error && error.message}
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
          </S.PostListContainer>
          <S.PostListContainer>
            <ReplyForm threadId={threadId} />
          </S.PostListContainer>
        </>
      )}
    </S.PostListContainer>
  );
};

export default PostList;

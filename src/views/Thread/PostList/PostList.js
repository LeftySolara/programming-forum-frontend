import React, { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";

import useAxios from "hooks/useAxios";

import PostListItem from "../PostListItem/PostListItem";

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
        <div>
          {error && error.message}
          <ul>
            {posts &&
              posts.map((post) => (
                <PostListItem
                  content={post.content}
                  author={post.author.username}
                  date={post.dateCreated}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostList;

import axiosClient from "api/axios";

const createPost = (authorId, threadId, content, token) => {
  return axiosClient
    .post(
      "/posts",
      {
        authorId,
        threadId,
        content,
      },
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default createPost;

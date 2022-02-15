import axiosClient from "api/axios";

const createPost = (authorId, threadId, content) => {
  return axiosClient
    .post("/posts", {
      authorId,
      threadId,
      content,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default createPost;

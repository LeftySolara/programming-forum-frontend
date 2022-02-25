import axiosClient from "api/axios";
import createPost from "./post";

/**
 * Sends a POST request to create a new thread.
 *
 * @param {String} authorId The user id of the thread author
 * @param {String} topic The title of the thread
 * @param {String} content The content of the thread's first post
 * @param {String} boardId The id of the board to post to
 * @param {String} token The authorization token for the request header
 */
const createThread = (authorId, topic, content, boardId, token) => {
  return axiosClient
    .post(
      "/threads",
      { authorId, boardId, topic },
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .then((res) => {
      createPost(authorId, res.data.thread.id, content, token).then(
        (response) => {
          return response;
        },
      );
    })
    .catch((err) => {
      return err;
    });
};

export default createThread;

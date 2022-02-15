import axiosClient from "api/axios";
import createPost from "./post";

/**
 * Sends a POST request to create a new thread.
 *
 * @param {String} topic The title of the thread
 * @param {String} content The content of the thread's first post
 * @param {String} boardId The id of the board to post to
 */
const createThread = (topic, content, boardId) => {
  // Placeholder until user authentication is implemented
  const authorId = "620c11ef46d381e90e7bba37";

  return axiosClient
    .post("/threads", { authorId, boardId, topic })
    .then((res) => {
      createPost(authorId, res.data.thread.id, content).then((response) => {
        return response;
      });
    })
    .catch((err) => {
      return err;
    });
};

export default createThread;

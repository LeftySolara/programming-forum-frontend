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
  const authorId = "620be94434d792544871aa8d";

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

import axiosClient from "api/axios";

/**
 * Sends a POST request to create a new board.
 *
 * @param {String} topic The board topic/title
 * @param {String} description A short description of the board's content
 * @param {String} categoryId The ID of the category this board belongs to
 *
 * @returns An HTTP response object.
 */
const createBoard = async (topic, description, categoryId) => {
  return axiosClient
    .post("/boards", {
      topic,
      description,
      categoryId,
    })
    .then((res) => {
      return res;
    });
};

export default createBoard;

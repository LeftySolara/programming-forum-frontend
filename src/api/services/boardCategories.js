import axiosClient from "api/axios";

const getBoardCategories = () => {
  return axiosClient
    .get("/boardCategories")
    .then((response) => response.data.boardCategories)
    .catch((err) => err);
};

/**
 * Sends a POST request to create a new board category.
 *
 * @param {String} topic The title of the new category
 * @param {Number} sortOrder The place in the list that this category should be put into
 * @param {String} token The authorization token for the request header
 */
const createBoardCategory = (topic, sortOrder, token) => {
  axiosClient
    .post(
      "/boardCategories",
      { topic, sortOrder },
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .catch((err) => err);
};

export { getBoardCategories, createBoardCategory };

import axiosClient from "api/axios";

const getBoardCategories = () => {
  return axiosClient
    .get("/boardCategories")
    .then((response) => response.data.boardCategories)
    .catch((err) => err);
};

const createBoardCategory = (topic) => {
  // TODO: implement actual error handling
  axiosClient
    .post("/boardCategories", { topic })
    .catch((err) => console.log(err));
};

export { getBoardCategories, createBoardCategory };

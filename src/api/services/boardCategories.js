import axiosClient from "api/axios";

const createBoardCategory = (topic) => {
  // TODO: implement actual error handling
  axiosClient
    .post("/boardCategories", { topic })
    .catch((err) => console.log(err));
};

export default createBoardCategory;

import axios from "axios";

const baseURL = `${process.env.REACT_APP_API_ENDPOINT}/boardCategories`;

// TODO: move into component
const createBoardCategory = (topic) => {
  // TODO: implement actual error handling
  axios.post(`${baseURL}/`, { topic }).catch((err) => console.log(err));
};

export default createBoardCategory;

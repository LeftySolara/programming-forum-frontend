import axiosClient from "api/axios";

/**
 * Sends a POST request to register a new user.
 *
 * @param {String} username The new user's username
 * @param {String} email The new user's email address
 * @param {String} password The user's password
 * @param {String} confirmPassword The user's repeated password
 *
 * @returns {Object} An HTTP response object
 */
const registerUser = (username, email, password, confirmPassword) => {
  return axiosClient
    .post("/users", {
      username,
      email,
      password,
      confirmPassword,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export default registerUser;

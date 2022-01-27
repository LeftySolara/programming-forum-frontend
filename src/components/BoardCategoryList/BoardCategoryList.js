import React from "react";

import useAxios from "hooks/useAxios";

const BoardCategoryList = () => {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/boardCategories",
  });

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error && error.message}
          {response &&
            response.map((cat) => <div key={cat._id}>{cat.topic}</div>)}
        </div>
      )}
    </div>
  );
};

export default BoardCategoryList;

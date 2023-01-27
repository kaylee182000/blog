import React from "react";

const CommnentList = ({ comments }) => {
  const renderComment = () => {
    return comments.map((item, index) => {
      let content;
      if (item.status === "approved") {
        content = item.content;
      }
      if (item.status === "pending") {
        content = "Pending";
      }
      if (item.status === "rejected") {
        content = "Rejected";
      }
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 mt-2" key={index}>
          <div className="me-2 mt-2 p-3 rounded border border-dark bg-secondary text-white">
            <h5 className="text-center">{`Comment ${index + 1}`}</h5>
            <div className="bg-white rounded">
              <p className="text-center text-dark">{content}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div className="row">{renderComment()}</div>;
};

export default CommnentList;

import React, { useState, useEffect, useCallback } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const result = await axios.get("http://localhost:4002/posts");
    setPosts(result.data);
  };

  const renderPost = () => {
    return Object.values(posts).map((item, index) => {
      return (
        <div key={index} className="mb-4">
          <div className="border border-dark p-3 bg-light rounded">
            <h4 className="text-center">{item.title}</h4>
            <CommentCreate postId={item.id} />
            <CommentList comments={item.comments} />
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return <div>{renderPost()}</div>;
};

export default PostList;

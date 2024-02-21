import React, { useEffect, useState } from "react";
import Edit from "../img/edit.svg";
import Delete from "../img/delete.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatDistance } from "date-fns";

const Single = () => {
  const [post, setPost] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/posts/${postId}`);
        if (!res.ok) {
          const message = `An error has occured: ${res.status}`;
          throw new Error(message);
        }

        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/posts/${postId}`, {
        method: "delete",
      });
      if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        throw new Error(message);
      }
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-12">
      <div className="flex-[5_5_0%] flex flex-col gap-7">
        <img className="w-full h-72 object-cover" src={post?.img} alt="" />
        <div className="flex items-center gap-2 text-base">
          <div>
            <span className="font-bold">{post?.author}</span>
            <p>Posted {formatDistance(Date(post.date), new Date())}</p>
          </div>
          <div className="flex gap-1">
            <Link to={`/write?edit=${post.id}`}>
              <img className="w-8 h-8" src={Edit} alt="Edit button" />
            </Link>
            <img
              onClick={handleDelete}
              className="w-9 h-9 cursor-pointer"
              src={Delete}
              alt="Delete button"
            />
          </div>
        </div>
        <h1 className="font-bold text-4xl">{post.title}</h1>
        <p className="text-lg text-justify">{post.content}</p>
      </div>
    </div>
  );
};

export default Single;

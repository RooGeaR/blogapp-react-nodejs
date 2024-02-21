import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const truncate = (str) =>
  str?.length > 70 ? `${str.substring(0, 70)}...` : str;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    const lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };
  const filterData = (info, query) => {
    if (!query) {
      return info;
    }
    return info.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      );
    });
  };

  const filteredPosts = filterData(posts, search);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/posts");
        if (!res.ok) {
          const message = `An error has occured: ${res.status}`;
          throw new Error(message);
        }

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-24 mt-10 [&>*:nth-child(odd)]:flex-row-reverse">
            <input
              className="p-3 border-solid border border-gray-400 w-96"
              type="text"
              placeholder="Buscar publicaciones"
              name="search"
              onInput={searchHandler}
            />

        {filteredPosts.map((post) => (
          <div className="flex gap-24" key={post.id}>
            <div className="flex-[2_2_0%] relative after:w-full after:h-full after:bg-orange-400 after:absolute after:top-4 after:-left-4 after:-z-10">
              <img
                className="w-full max-h-96 object-cover"
                src={`./uploads/${post.img}`}
                alt=""
              />
            </div>
            <div className="flex-[3_3_0%] flex flex-col justify-between">
              <Link to={`/post/${post.id}`}>
                <h1 className="font-bold text-4xl">{post.title}</h1>
              </Link>
              <p
                className="text-lg"
                dangerouslySetInnerHTML={{ __html: truncate(post.content) }}
              ></p>
              <Link to={`/post/${post.id}`}>
                <button className="w-max py-2.5 px-5 border-2 border-orange-400 text-orange-400 hover:border-white hover:bg-orange-300 hover:text-red-400">
                  Leer más
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

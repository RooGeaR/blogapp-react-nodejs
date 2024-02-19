import React from "react";
import { Link } from "react-router-dom";

const truncate = (str) =>
  str?.length > 70 ? `${str.substring(0, 70)}...` : str;

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Author 1",
      created_at: "2024-02-19",
      img: "https://images.pexels.com/photos/14826023/pexels-photo-14826023.jpeg",
    },
    {
      id: 2,
      title: "Title 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Author 2",
      created_at: "2024-02-18",
      img: "https://images.pexels.com/photos/14698352/pexels-photo-14698352.jpeg",
    },
    {
      id: 3,
      title: "Title 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Author 3",
      created_at: "2024-02-17",
      img: "https://images.pexels.com/photos/14725368/pexels-photo-14725368.jpeg",
    },
    {
      id: 4,
      title: "Title 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Author 4",
      created_at: "2024-02-16",
      img: "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg",
    },
    {
      id: 5,
      title: "Title 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Author 5",
      created_at: "2024-02-15",
      img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-24 mt-10 [&>*:nth-child(odd)]:flex-row-reverse">
        {posts.map((post) => (
          <div className="flex gap-24" key={post.id}>
            <div className="flex-[2_2_0%] relative after:w-full after:h-full after:bg-orange-400 after:absolute after:top-4 after:-left-4 after:-z-10">
              <img
                className="w-full max-h-96 object-cover"
                src={post.img}
                alt=""
              />
            </div>
            <div className="flex-[3_3_0%] flex flex-col justify-between">
              <Link to={`/post/${post.id}`}>
                <h1 className="font-bold text-4xl">{post.title}</h1>
              </Link>
              <p className="text-lg">{truncate(post.content)}</p>
              <button className="w-max pl-2.5 pr-5 border-2 border-orange-400 text-orange-400 hover:border-white hover:bg-orange-300 hover:text-red-400">
                Leer más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

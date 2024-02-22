import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
  const state = useLocation().state;
  const navigate = useNavigate();
  const [value, setValue] = useState(state?.content || "");
  const [title, setTitle] = useState(state?.title || "");
  const [author, setAuthor] = useState(state?.author || "");
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch(`http://localhost:3001/api/upload`, {
        method: "post",
        body: formData,
      });
      if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        throw new Error(message);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    let imgName = state?.img || "";
    if (file) {
      imgName = await upload();
    }

    try {
      const info = { title, content: value, author, img: imgName };
      let method = state ? "put" : "post";
      let url = state
        ? `http://localhost:3001/api/posts/${state.id}`
        : "http://localhost:3001/api/posts";

      if (!state) {
        info.date = new Date();
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });
      if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        throw new Error(message);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex mt-5 gap-5">
      <div className="flex-[5_5_0%] flex flex-col gap-5">
        <input
          value={title}
          type="text"
          placeholder="Título"
          className="p-3 border-solid border border-gray-400"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="h-72 overflow-scroll border border-gray-400">
          <ReactQuill
            className="h-full border-none"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <input
          value={author}
          type="text"
          placeholder="Autor"
          className="p-3 border-solid border border-gray-400"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="flex-[2_2_0%] flex flex-col gap-5">
        <div className="border border-gray-400 p-3 flex-1 flex flex-col justify-between text-xs text-gray-500">
          <h1 className="text-lg font-bold">Publicación</h1>
          {/* <span>
            <b>Estado:</b> Borrador
          </span> */}
          <label className="text-sm text-orange-500 underline cursor-pointer">
            Subir imagen
            <input
              className="hidden"
              type="file"
              name=""
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          {(file || state?.img) && <img src={file ? URL.createObjectURL(file): `../uploads/${state?.img}`} alt="" className='w-64 h-64 object-cover mx-auto'/>}
          <div className="flex justify-center">
            {/* <button className="text-orange-400 bg-white border border-orange-400 px-1 py-2">
              Guardar como borrador
            </button> */}
            <button
              onClick={handleClick}
              className="text-white bg-orange-400 border border-orange-400 px-1 py-2"
            >
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;

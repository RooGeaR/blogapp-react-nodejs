import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex mt-5 gap-5">
      <div className="flex-[5_5_0%] flex flex-col gap-5">
        <input
          type="text"
          placeholder="Título"
          className="p-3 border-solid border border-gray-400"
        />
        <div className="h-72 overflow-scroll border border-gray-400">
          <ReactQuill
            className="h-full border-none"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="flex-[2_2_0%] flex flex-col gap-5">
        <div className="border border-gray-400 p-3 flex-1 flex flex-col justify-between text-xs text-gray-500">
          <h1 className="text-lg font-bold">Publicación</h1>
          <span>
            <b>Estado:</b> Borrador
          </span>
          <label className="text-sm text-orange-500 underline cursor-pointer">
            Subir imagen
            <input className="hidden" type="file" name="" id="file" />
          </label>
          <div className="flex justify-between">
            <button className="text-orange-400 bg-white border border-orange-400 px-1 py-2">
              Guardar como borrador
            </button>
            <button className="text-white bg-orange-400 border border-orange-400 px-1 py-2">
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;

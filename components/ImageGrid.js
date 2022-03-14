import React from "react";

export default function ImageGrid({ image }) {
  return (
    <div className="">
      <div className=" bg-slate-600 overflow-hidden">
        <img
          src={image}
          alt=""
          className="hover:scale-110 hover:opacity-50 duration-500"
        />
      </div>
    </div>
  );
}

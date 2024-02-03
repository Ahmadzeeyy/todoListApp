import React, { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function LoadItem({ item, checkedItems, deleteItem, editedd }) {
  const [edited, setIsedited] = useState(true);
  const [value, setvalue] = useState(item.task);
  function isEdit(id, valuee) {
    setIsedited(!edited);
    editedd(id, valuee);
  }

  return (
    <div className="flex justify-between border-2 mt-6 p-3 px-5 text-lg font-semibold ">
      <input
        type="text"
        disabled={edited}
        style={
          item.complete ? { textDecoration: "line-through", color: "red" } : {}
        }
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        className="w-10/12 bg-white focus:outline-none cursor-pointer"
      />
      <div className="action flex gap-3">
        <input
          type="checkbox"
          checked={item.complete}
          className="text-green-500"
          onChange={() => checkedItems(item.id)}
        />
        <div onClick={() => isEdit(item.id, value)} className="cursor-pointer">
          {edited === true ? "✏" : "🔒"}{" "}
        </div>
        <div onClick={() => deleteItem(item.id)} className="cursor-pointer">
          🗑
        </div>
      </div>
    </div>
  );
}

export default LoadItem;

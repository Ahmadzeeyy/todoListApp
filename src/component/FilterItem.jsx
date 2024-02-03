// import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function FilterItem({ handleFilter }) {
  return (
    <section>
      <h1 className="text-center text-3xl font-semibold mt-14">TodoList</h1>
      <div className="mt-7 gap-4 flex">
        <button className="py-2 bg-[#16A3B5] font-lg w-2/4 text-white rounded-sm" onClick={() => handleFilter("all")}>
          All
        </button>
        <button className="py-2 bg-[#16A3B5] font-lg w-2/4 text-white rounded-sm" onClick={() => handleFilter("Done")}>
          Done
        </button>
        <button className="py-2 bg-[#16A3B5] font-lg w-2/4 text-white rounded-sm" onClick={() => handleFilter("Todo")}>
          Todo
        </button>
      </div>
    </section>
  );
}

export default FilterItem;

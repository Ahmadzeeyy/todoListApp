import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function AddItem({ item, setItem, addNewItem }) {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();
  function addItem(event) {
    event.preventDefault();
    let newItem = { id: item.length + 1, task: value, complete: false };
    addNewItem(newItem);
    navigate("/")
  }
  return (
    <section className="mx-56 my-8">
      <div className="header">
        <h1 className="text-center text-3xl font-bold mb-5">TodoInput</h1>
        <div className="flex p-5 px-8 border-2">
          <div className="flex-col w-full">
            <form className="relative" onSubmit={addItem}>
              <input
                type="text"
                value={value}
                onChange={(e) => setvalue(e.target.value)}
                className="p-2 border-2 px-14 w-full mb-4 focus:outline-gray-300"
                placeholder="Input/Edit todo"
              />
              <div className=" bg-[#16A3B5]  absolute top-0 h-[42px] w-12 flex items-center justify-center">
                📙
              </div>
            </form>
            <Link to="/">
              <button
                className="py-2 font-lg bg-[#16A3B5] w-full text-white rounded-sm"
                onClick={()=>addItem(event)}
              >
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddItem;

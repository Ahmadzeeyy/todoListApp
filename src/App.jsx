import "./index.css";
import AddItem from "./pages/AddItem";
import MainPages from "./pages/MainPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dataa from "./data/data.json";
import { useState, useEffect } from "react";

function App() {
  const [item, setItem] = useState(dataa);
  const [data, setData] = useState(item);
  function addNewItem(newItem) {
    if (!newItem) {
      return;
    }
    setItem([...data, newItem]);
  }

  const [filtered, setfiltered] = useState(data);
  function handleFilter(dataSearch) {
    if (dataSearch === "Done") {
      setfiltered(data.filter((item) => item.complete === true));
    } else if (dataSearch === "Todo") {
      setfiltered(data.filter((item) => item.complete === false));
    } else {
      setfiltered(data);
    }
  }
  useEffect(() => {
    handleFilter();
  }, [data]);
  function handleChecked(id) {
    setData((item) =>
      item.map((items) =>
        items.id === id ? { ...items, complete: !items.complete } : items
      )
    );
  }
  function editedd(id, taskEdited) {
    setData((item) =>
      item.map((items) =>
        items.id === id ? { ...items, task: taskEdited } : items
      )
    );
  }
  function handleDeleteItem(id) {
    const conf = confirm(`Apakah yakin untuk menghapus ?`);
    if (conf) {
      setData((data) => data.filter((item) => item.id !== id));
    } else {
      setData(item);
    }
  }
  function handleDeletDoneItem() {
    setData((items) => items.filter((item) => item.complete === false));
  }
  function handleDeletAllItem() {
    setData([]);
  }
  function handleSearchItem(dataSearch) {
    setData(
      item.filter((item) => item.task.toLocaleLowerCase().includes(dataSearch))
    );
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPages
                filtered={filtered}
                setItem={setItem}
                items={item}
                handleFilter={handleFilter}
                handleChecked={handleChecked}
                editedd={editedd}
                handleDeleteItem={handleDeleteItem}
                handleDeletDoneItem={handleDeletDoneItem}
                handleDeletAllItem={handleDeletAllItem}
                handleSearchItem={handleSearchItem}
              />
            }
          ></Route>
          <Route
            path="/add-item"
            element={
              <AddItem setItem={setItem} item={data} addNewItem={addNewItem} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

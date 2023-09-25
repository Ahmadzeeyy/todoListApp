import "./index.css";
import AddItem from "./pages/AddItem";
import MainPages from "./pages/MainPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./data/data.json";
import { useState } from "react";

function App() {
  const [item, setItem] = useState(data);
  function addNewItem(newItem) {
    if (!newItem) {
      return;
    }
    setItem([...item, newItem]);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPages setItem={setItem} item={item} />}></Route>
          <Route path="/add-item" element={<AddItem setItem={setItem} item={item} addNewItem={addNewItem} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

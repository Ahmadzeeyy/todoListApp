import React, { useState } from "react";
import ButtonDelete from "../component/ButtonDelete";
import FilterItem from "../component/FilterItem";
import ItemsList from "../component/ItemsList";
import Header from "../component/Header";

function MainPages({ item, setItem }) {
  const [data, setData] = useState(item);
  function handleChecked(id) {
    setData((item) => item.map((items) => (items.id === id ? { ...items, complete: !items.complete } : items)));
  }
  function editedd(task) {
    setData((item) => item.map((items) => (items.task === task ? { ...items, task: items.task } : items)));
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
    setData((item) => item.filter((item) => item.task.includes(dataSearch)));
  }

  return (
    <main className="mx-56 my-8">
      <Header searchItem={handleSearchItem}></Header>
      <FilterItem items={item} setData={setData}></FilterItem>
      <ItemsList items={data} checkedItems={handleChecked} deleteItem={handleDeleteItem} editedd={editedd}></ItemsList>
      <ButtonDelete deletDone={handleDeletDoneItem} deletAll={handleDeletAllItem}></ButtonDelete>
    </main>
  );
}

export default MainPages;

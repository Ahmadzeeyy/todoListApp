/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ButtonDelete from "../component/ButtonDelete";
import FilterItem from "../component/FilterItem";
import ItemsList from "../component/ItemsList";
import Header from "../component/Header";

function MainPages({
  filtered,
  handleSearchItem,
  handleFilter,
  handleChecked,
  handleDeleteItem,
  editedd,
  handleDeletDoneItem,
  handleDeletAllItem,
}) {
  return (
    <main className="mx-56 my-8">
      <Header searchItem={handleSearchItem}></Header>
      <FilterItem handleFilter={handleFilter}></FilterItem>
      <ItemsList
        items={filtered}
        checkedItems={handleChecked}
        deleteItem={handleDeleteItem}
        editedd={editedd}
      ></ItemsList>
      <ButtonDelete
        deletDone={handleDeletDoneItem}
        deletAll={handleDeletAllItem}
      ></ButtonDelete>
    </main>
  );
}

export default MainPages;

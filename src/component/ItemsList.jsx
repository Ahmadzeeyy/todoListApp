import { useState } from "react";
import LoadItem from "./LoadItem";
// eslint-disable-next-line react/prop-types
function ItemsList({ items, checkedItems, deleteItem, editedd }) {
  return (
    <section className="flex-col gap-3">
      {items.map((item) => (
        <LoadItem key={item.id} item={item} checkedItems={checkedItems} deleteItem={deleteItem} editedd={editedd}></LoadItem>
      ))}
    </section>
  );
}

export default ItemsList;
  
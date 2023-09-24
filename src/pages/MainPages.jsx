import React from 'react'
import ButtonDelete from '../component/ButtonDelete'
import FilterItem from '../component/FilterItem'
import ItemsList from '../component/ItemsList'
import Header from '../component/header'
import { useState } from 'react'
import data  from '../data/data.json'


function MainPages({item, setItem}) {
    function handleChecked (id){ 
    setItem((item) =>item.map((items)=>(items.id === id ? { ...items, complete: !items.complete}: items)
    ))
  }
    function editedd (task){ 
    setItem((item) =>item.map((items)=>(items.task === task ? { ...items, task: items.task}: items)
    ))
  }
    function handleDeleteItem (id){
      const conf = confirm( `Apakah yakin untuk menghapus ?` )
        if(conf){
          setItem((newData)=>newData.filter((item)=>(item.id !== id)))
        }else{
          setItem(item)
        }
  }
    function handleDeletDoneItem(){ 
    setItem((items)=> items.filter((item)=> ((item.complete === false ))
    ))
  }
    function handleDeletAllItem(){ 
    setItem([])
  }
    function handleSearchItem(dataSearch){
      setItem((item)=>item.filter((item)=>(item.task.includes(dataSearch))));
    }



  return (
    <main className="mx-56 my-8">
    <Header searchItem={handleSearchItem}></Header>
    <FilterItem items ={item} setItem={setItem}></FilterItem>
    <ItemsList items ={item} checkedItems = {handleChecked} deleteItem ={handleDeleteItem} editedd={editedd}></ItemsList>
    <ButtonDelete deletDone={handleDeletDoneItem} deletAll ={handleDeletAllItem}></ButtonDelete>
    </main>
  )
}

export default MainPages


import Menu from '../Menu';
import "bootstrap/dist/css/bootstrap.min.css";
import  Container  from 'react-bootstrap/Container';

import {
  DndContext,
  closestCenter
}from "@dnd-kit/core";
import{
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
}from "@dnd-kit/sortable";
import React ,{useState} from "react";


function SortableItem (props) {

const [languages, setLanguages]=useState(["Javascript","Python", "typeScript"]);
  return (
<div>
    

    <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    ><Menu/>
      <Container className='p-3' style={{"width":"50%"}} align="center">
        <h3>Les Languages de programmation</h3>
        <SortableContext items={languages}
        strategy={verticalListSortingStrategy}>
          {languages.map(language => <SortableItem key={language} id={language}/>)}
          </SortableContext>
          </Container>
          </DndContext>
    </div>
     
  );
  function handleDragEnd(event){
    console.log("Drag and colled");
    const {active,over}=event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER: " + over.id);
    if(active.id !==over.id){
      setLanguages((items)=>{
        const activeIndex=items.indexOf(active.id);
        const overIndex=items.indexOf(over.id);
        console.log(arrayMove(items,activeIndex,overIndex));
        return arrayMove(items, activeIndex,overIndex);
      })
    }
  }

}
export default SortableItem;
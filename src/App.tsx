 
import axios from "axios";
import {useEffect, useState} from "react"
import ToDoListFunctions from "./components/ToDoListFunctions";
export interface toDo{
  id:number;
  text:string;
  completed:boolean;
}

function App(): JSX.Element {
  return (
    <div>
  <div>hello</div>
  <ToDoListFunctions/>
  </div>
    )
}

export default App;

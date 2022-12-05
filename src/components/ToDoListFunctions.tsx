import {useEffect, useState} from "react"
import axios from "axios"
import { toDo } from "../App"



export interface IToDo {
    task: string;
    
    id: number;
  }

  const Url = "http://localhost:4000"


  export default function  ToDoListFunctions(): JSX.Element {

    const [toDoList, setToDoList] = useState<IToDo[]>([]);
    const [input, setInput] = useState<string>("");
    const [update, setUpdate] = useState<boolean>(false);
  

    useEffect(() => {
        getToDoList();
      }, []);
    
      //GET to dos from API
      const getToDoList = async () => {
        console.log("working");
        try {
          const response = await axios.get(Url + "/items");
          setToDoList(response.data);
        } catch (error) {
          console.error(
            "Get Eooro",
            error
          );
        }
      };


    return(
        <div>
            {toDoList.map((el) => {
                return (
                    <div key={el.id}>{el.task}</div>
                )
            })}
        </div>
    )
  }
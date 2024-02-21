import { useState,useContext } from "react";
import { Form,Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MyContext } from "./All";

export function Task(props) {
  const [descUpdate, setDescUpdate] = useState('');
  const [isDone, setIsDone] = useState();
 

 const { data1, setData1, data2, setData2 } = useContext(MyContext);
  const handleEdit = (e) => {
    e.preventDefault();
    setData1('modified');
    setData2(props.id);
    
     
  };

  return (
    <>
      <tr id={props.id}>
        <td>{props.id}</td>
        <td>{props.description}</td>
        <td>{props.isDone}</td>
        <td>
            <button onClick={handleEdit}>
          <img
            src="/assets/update.png"
            alt="update"
            style={{ height: "25px"}}
            href="#form"
          />
          </button>
        </td>
      </tr>
      
    </>
  );
}

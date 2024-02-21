import { useContext, useState } from "react";
import { MyContext } from "./All";
import { Form,InputGroup,Button, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../JS/actions/editTask";

export function Modify() {
  const { data1, setData1, data2, setData2 } = useContext(MyContext);
  let toUpdate = useSelector(state=>state.listReducer[data2-1])
  const [newDesc,setNewDesc] = useState('');
  const [isChecked,setIsChecked] = useState(true);

  const dispatch = useDispatch();

  const updateHandler = (e)=>{
        e.preventDefault();
        dispatch(editTask({id:data2,description:newDesc,isDone:isChecked}));
        setData1('');
      setData2('');
  }

  const handleCheck = ()=>{
    isChecked?setIsChecked(false):setIsChecked(true);
    
    
  }
  //console.log(newDesc);
  return (
         data1 !== '' &&
         <div style={{ margin: "25px 300px" }}>
         <h3 style={{ textAlign: "center" }}>Modifier une tache</h3> 
         <Form id="form">
         <Form.Label>Id de la tache</Form.Label><p>{toUpdate.id}</p>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description de la tache</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue={toUpdate.description}
            onChange={(e)=>{setNewDesc(e.currentTarget.value)}}
          />
        </Form.Group>
        <InputGroup className="mb-3">
        <Form.Label>Deja fait?</Form.Label>
          <InputGroup.Checkbox aria-label="Checkbox for following text input"  onChange={handleCheck}/>
        </InputGroup>
        <Button onClick={updateHandler}>Ajouter</Button>
         </Form>
         </div>
  );
    
    
    
  
}

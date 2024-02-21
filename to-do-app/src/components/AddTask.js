import { useState } from "react";
import { Form, Button,InputGroup } from "react-bootstrap";
import { addTask } from "../JS/actions/addTask";
import { useDispatch, useSelector } from "react-redux";
export function AddTask() {
  let numTask = useSelector((state) => state.listReducer.length);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(numTask);
    //console.log('clique !');
    dispatch(addTask({ id: numTask + 1, description: task, isDone: false }));
  };
  return (
    <div style={{ margin: "10px 300px" }}>
      <h3 style={{ textAlign: "center" }}>Ajouter une tache</h3>
      <Form>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description de la tache</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setTask(e.currentTarget.value)}
          />
        </Form.Group>
        <InputGroup className="mb-3">
        <Form.Label>Deja fait?</Form.Label>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" disabled />
        </InputGroup>
        <Button onClick={handleSubmit}>Ajouter</Button>
      </Form>
    </div>
  );
}

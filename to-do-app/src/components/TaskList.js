import { useSelector } from "react-redux";
import { Task } from "./Task";
import { Button, Table } from "react-bootstrap";
import { useState } from "react";

export function TaskList() {
  let tasks = useSelector((state) => state.listReducer);
  const [toPrint, setToPrint] = useState("");
  const handleDone = (e) => {
    e.preventDefault();
    toPrint === "" ? setToPrint("done") : setToPrint("");
  };

  const handleToDo = (e) => {
    e.preventDefault();
    toPrint === "" ? setToPrint("todo") : setToPrint("");
  };
  //console.log(tasks);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around",marginTop:"10px"}}>
        <Button onClick={handleDone} variant="success">Done</Button>

        <Button onClick={handleToDo} variant="danger">To do</Button>
      </div>
      <Table striped bordered hover style={{ margin: "50px 0px" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>isDone</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {toPrint === "" &&
            tasks.map((task) => (
              <Task
                id={task.id}
                description={task.description}
                isDone={
                  task.isDone ? (
                    <img
                      src="/assets/done.png"
                      alt="done"
                      style={{ height: "25px" }}
                    />
                  ) : (
                    <img
                      src="/assets/not.png"
                      alt="not"
                      style={{ height: "25px" }}
                    />
                  )
                }
                key={task.id}
              />
            ))}
          {toPrint === "done" &&
            tasks
              .filter((task) => task.isDone === true)
              .map((task) => (
                <Task
                  id={task.id}
                  description={task.description}
                  isDone={
                    task.isDone ? (
                      <img
                        src="/assets/done.png"
                        alt="done"
                        style={{ height: "25px" }}
                      />
                    ) : (
                      <img
                        src="/assets/not.png"
                        alt="not"
                        style={{ height: "25px" }}
                      />
                    )
                  }
                  key={task.id}
                />
              ))}

          {toPrint === "todo" &&
            tasks
              .filter((task) => task.isDone === false)
              .map((task) => (
                <Task
                  id={task.id}
                  description={task.description}
                  isDone={
                    task.isDone ? (
                      <img
                        src="/assets/done.png"
                        alt="done"
                        style={{ height: "25px" }}
                      />
                    ) : (
                      <img
                        src="/assets/not.png"
                        alt="not"
                        style={{ height: "25px" }}
                      />
                    )
                  }
                  key={task.id}
                />
              ))}
        </tbody>
      </Table>
      
    </>
  );
}
//connect(mapStateToProps)(TaskList);

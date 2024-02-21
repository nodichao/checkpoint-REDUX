import './App.css';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import { All } from './components/All';
import { Modify } from './components/Modify';


function App() {
  return (
    <>
      <All>
        <TaskList/>
        <AddTask/>
        <Modify/>
      </All>
    </>
  );
}

export default App;

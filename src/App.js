import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name={"Miky"}></Greeting> */}
       {/* <GreetingF name="Miky"></GreetingF> */}
       {/* Componente de listado de tareas */}
       <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;

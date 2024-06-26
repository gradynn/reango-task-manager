import './App.css';
import Header from './components/Header/Header.js';
import TaskList from './components/TaskList/TaskList.js';
import NewTask from './components/NewTask/NewTask.js';

function App() {
  return (
    <div className="App">
        <Header />
        <NewTask />
        <TaskList />
    </div>
  );
}

export default App;

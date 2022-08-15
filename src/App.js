import React, {useState} from "react";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { nanoid } from "nanoid";
 //Nanoid is a library that helps make unique identifiers for tasks. It will prevent addTask() from giving each todo the same ID */

const FILTER_MAP = {
  All: () => true, //shows all tasks
  Active: (task) => !task.completed, //shows tasks that are not complete
  Completed: (task) => task.completed //shows tasks that are completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

//FILTER_MAP and FILTER_NAMES appear here to prevent them from being recalculated everytime the app re-renders, which is not want we want

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  const [filter, setFilter] = useState('All');//We want all of our tasks to be shown at the start

function addTask(name) {
  const newTask = {id: `todo-${nanoid()}`, name, completed: false};
  setTasks([...tasks, newTask])
}

function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      // whose `completed` prop has been inverted
      return {...task, completed: !task.completed}
    }
    return task;
  });
  setTasks(updatedTasks);
}

function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}

function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
  // if this task has the same ID as the edited task
    if (id === task.id) {
      //
      return {...task, name: newName}
    }
    return task;
  });
  setTasks(editedTaskList);
}


const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
<Todo id={task.id}
 name={task.name} 
 completed={task.completed} 
 key={task.id} 
 toggleTaskCompleted={toggleTaskCompleted} 
 deleteTask={deleteTask}
 editTask={editTask} />
));

const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} 
  name={name}
  isPressed={name === filter}
  setFilter={setFilter} />
));

const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';

const headingText = `${taskList.length} ${tasksNoun} remaining `;

  return (
    <div className="App">
      <h1>So, what's the plan for today?</h1> 
      <TodoForm addTask={addTask}/>
      <div className="filter-btn-group">
      {filterList}
      </div>
      <h2 id="how-many-tasks">{headingText}</h2>
      {taskList}
      

      {/*<Todo name="Watch Your Lie in April" completed={true} id="todo-0" />
      <Todo name="eat Tofu" completed={true} id="todo-1"/>
      <Todo name="study japanese" completed={false} id="todo-2"/>
      <Todo name="study web dev stuff" completed={false} id="todo-3"/>*/}
      
    </div>
  );
}

export default App;

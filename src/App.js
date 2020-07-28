import React from 'react';
import './App.css';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import VisibilityFilter from './components/visibilityFilter';
import {Provider} from 'react-redux';
import store from './redux/store';


const filters = ['all', 'completed', 'incomplete']
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TODO Managers</h1>
        <AddTodo />
        <TodoList todos={[{ content: "Task 1" }, { content: "Task 2" }]} />
        <VisibilityFilter filters={filters} />
          <br></br>
        <small>Check on <b> added TASK</b> to mark as completed </small>
      </div>
    </Provider>
  );
}

export default App;

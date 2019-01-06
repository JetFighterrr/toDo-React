import React, {Component} from 'react';
import TodoForm from './modules/todo/todoForm'
import TodoList from './modules/todo/todoList'

class App extends Component{
  render(){
    return (
      <div className="App">
          <TodoForm/>
          <TodoList/>

      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoAdd, inputUpdate } from './_actions/todoActions';

class TodoForm extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   inputText: ,
    // };

    this.addTodo = this.addTodo.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  addTodo(e){
    e.preventDefault();
    let myValue =  e.target.value || '';
    console.log(myValue.trim());
    console.log(this.props.todoList);
    this.props.todoAdd(myValue.trim());
  }

  changeInput(e){
    e.preventDefault();
    let myValue =  e.target.value || '';
    console.log(myValue.trim());
    console.log(this.props.todoList);
    this.props.inputUpdate(myValue.trim());
  }

  render() {
    return (

      <form onSubmit={this.addTodo}>
          <input
            type = 'text'
            value = {this.props.todoList.inputText}
            onChange = {this.changeInput}
          />
          <button type="submit">{this.props.todoList.addButtonName}</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
    todoList: state.todo.todoList,
});

const mapDispatchToProps = dispatch => ({

  todoAdd: todoName => dispatch(todoAdd(todoName)),
  inputUpdate: entry => dispatch(inputUpdate(entry))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

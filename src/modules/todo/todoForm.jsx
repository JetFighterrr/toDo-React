import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoAdd } from './_actions/todoActions';

class TodoForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e){
    e.preventDefault();
    console.log(this.state.inputText);
    this.props.todoAdd(this.state.inputText);

    this.setState({
      inputText:'',
    });
  }

  render() {
    return (

      <form onSubmit={this.addTodo}>
          <input
            type='text'
            value={this.state.inputText}
            onChange = { e => this.setState({
              inputText: e.target.value,
              })}
          />
          <button type="submit">Add to list</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

  todoAdd: todoName => dispatch(todoAdd(todoName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

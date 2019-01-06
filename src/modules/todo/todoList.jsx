import React, {Component} from "react";
import { connect } from "react-redux";
import {lineDelete} from './_actions/todoActions';

class TodoList extends Component {
    constructor(props){
      super(props);
      this.deleteLine = this.deleteLine.bind(this);
    }

    deleteLine(e){
      e.preventDefault();
      this.props.lineDelete(Number(e.target.id));
    }

  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.list.map( (el, index) =>
            <li id = {el.id}>
              {el.value}
                <button
                id = {index}
                onClick={this.deleteLine}>
                  Delete
                </button>

            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todo.todoList,
});//for _todo see todoReducers

const mapDispatchToProps = (dispatch) => ({
  lineDelete: id => dispatch(lineDelete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


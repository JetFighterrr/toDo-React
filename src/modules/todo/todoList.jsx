import React, {Component} from "react";
import { connect } from "react-redux";
import {lineDelete} from './_actions/todoActions';
import {lineEdit} from './_actions/todoActions';

class TodoList extends Component {
    constructor(props){
      super(props);
      this.state = {
        editMode:false,
      };
      this.deleteLine = this.deleteLine.bind(this);
      this.editLine = this.editLine.bind(this);
    }

    deleteLine(e){
      e.preventDefault();
      this.props.lineDelete(Number(e.target.id));
      console.log(Number(e.target.id));
      // console.log(this.props.todoList.list[Number(e.target.id)].value);
    }

    editLine(e){
    e.preventDefault();
    this.props.lineEdit(Number(e.target.id));
    console.log(Number(e.target.id));
    // console.log(this.props.todoList.list[Number(e.target.id)].value);
    // console.log(this.props.todoList.editedItem);
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
                onClick={this.editLine}>
                  Edit
                </button>
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
  lineEdit: id => dispatch(lineEdit(id)),
  lineDelete: id => dispatch(lineDelete(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


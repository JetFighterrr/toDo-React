import React, { Component } from 'react';
import './App.css';
let uniqid = require('uniqid');

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      inputText : 'abs',
      addNotSave: true,
      editedItem: null,
      list: [
        {
          id: '0',
          value: 'nothing here',
        }],
    }
  }

  addToList(){
    if(this.state.addNotSave) {
      this.setState({
        list: [...this.state.list,
          {
            id: uniqid(),
            value: this.state.inputText,
          }],
        inputText: ''
      });
    }
    else  {
            const editedList =  this.state.list;
            editedList.forEach(el =>
                              {if (el.id === this.state.editedItem) el.value = this.state.inputText});
            this.setState({ input:'',
                            addNotSave: true,
                            editedItem: null,
                            list: editedList,
            });
    }
  }


  changeInput(value){
    this.setState({ inputText: value});
  }

  clearInput(){
    this.setState({inputText: ''})
  }

  clearList(){
    this.setState({ inputText: '',
                    list: [],
                    })
  }

  deleteItem(id){
    const filtered = this.state.list.filter(el => el.id !== id );
    this.setState({list: filtered});
  }

  editItem(id) {
    for (let el in this.state.list) {
      if (this.state.list[el].id === id) {

        this.setState({
          editedItem: id,
          addNotSave: false,
          inputText: this.state.list[el].value,
        });
        break;
      }
    }
  }

  render() {
    return (
      <div >
        <input type = 'text'
               value = {this.state.inputText}
               onChange={(e)=> this.changeInput(e.target.value)}
        />

        <button onClick={ () => this.addToList() }> {this.state.addNotSave ? 'Add to list' : 'Save edited item'} </button>
        <button onClick={ () => this.clearInput()}>Clear Input</button>
        <button onClick={ () => this.clearList() }>Clear List</button>

        <ul>
          {this.state.list.map(el=><li key = {el.id}>
              {el.value}
              <button onClick={ () => this.deleteItem(el.id) }>Delete Item</button>
              <button onClick={ () => this.editItem(el.id) }>Edit Item</button>
          </li>

          )}
        </ul>
      </div>
    );
  }
}

export default App;

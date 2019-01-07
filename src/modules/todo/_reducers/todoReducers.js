const initialState= {
 todoList:
    {
      inputText: '',
      addNotSave: true,
      editedItem: null,
      addButtonName: 'Add',
      list: [ { id: 0, value: 'nothing here'},
              { id: 1, value: 'nothing again'}
        ],
    },
};

const todo = (state = initialState, action) => {
      switch(action.type){
        case 'TODO_ADD':{
          if (state.todoList.addNotSave) {
            return {
              todoList: {
                inputText: '',
                addNotSave: true,
                editedItem: null,
                addButtonName: 'Add',
                list: [...state.todoList.list,
                  {
                    id: Math.floor(Math.random() * 1000),
                    value: state.todoList.inputText
                  }]
              }
            }
          }
          else{
            return {
              todoList: {
                inputText: '',
                addNotSave: true,
                editedItem: null,
                addButtonName: 'Add',
                list: state.todoList.list.slice(0,state.todoList.editedItem).concat(
                  { id: state.todoList.list[state.todoList.editedItem].id,
                    value: state.todoList.inputText
                  }).concat(state.todoList.list.slice(state.todoList.editedItem+1))

              }
            }
          }
        }
        case 'TODO_DELETE':
          return{
            todoList:{
              inputText: state.todoList.inputText,
              addNotSave: state.todoList.addNotSave,
              addButtonName: state.todoList.addButtonName,
              editedItem: state.todoList.editedItem,
              list: state.todoList.list.filter((el,index) => {
                return index !== action.payload
              })
            }};
        case 'TODO_EDIT':
          return{
            todoList:{
              inputText: state.todoList.list[action.payload].value,
              addNotSave: false,
              addButtonName: 'Save edited',
              editedItem: action.payload,
              list: state.todoList.list
            }};
        case 'ENTRY_UPDATE':
          return{
            todoList:{
              inputText: action.payload,
              addNotSave: state.todoList.addNotSave,
              addButtonName: state.todoList.addButtonName,
              editedItem: state.todoList.editedItem,
              list: state.todoList.list
            }};
      default:
        return state;
    }
};

export default todo;
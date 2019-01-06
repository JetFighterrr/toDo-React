const initialState= {
 todoList:
    {
      inputText: 'abs',
      addNotSave: true,
      editedItem: null,
      list: [ { id: 0, value: 'nothing here'},
              { id: 1, value: 'nothing again'}
        ],
    },
};

const todo = (state = initialState, action) => {
      switch(action.type){
        case 'TODO_ADD':
        return {
          todoList:{
              inputText: state.inputText,
              addNotSave: state.addNotSave,
              editedItem: state.editedItem,
              list:[ ...state.todoList.list,
                {id: Math.floor(Math.random()*1000),
                  value: action.payload
                }],
        }};
        case 'TODO_DELETE':
          return{
            todoList:{
              inputText: state.inputText,
              addNotSave: state.addNotSave,
              editedItem: state.editedItem,
              list:state.todoList.list.filter((el,index) => {
                return index !== action.payload
              }),
            }};
      default:
        return state;
    }
};

export default todo;
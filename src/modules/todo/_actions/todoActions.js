export function todoAdd(todoName) {
  return dispatch =>
    dispatch({
      type: 'TODO_ADD',
      payload: todoName
    });
}

export function lineDelete(idNumber) {
  return dispatch =>
    dispatch({
      type: 'TODO_DELETE',
      payload: idNumber
    });
}
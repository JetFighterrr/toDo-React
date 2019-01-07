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

export function lineEdit(idNumber) {
  return dispatch =>
    dispatch({
      type: 'TODO_EDIT',
      payload: idNumber
    });
}

export function inputUpdate(entry) {
  return dispatch =>
    dispatch({
      type: 'ENTRY_UPDATE',
      payload: entry
    });
}
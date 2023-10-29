function todos(state = [], action) {
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem("todoState");
      if (serializedState == null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.log("ERROR LOADING STATE -->", error);
      return undefined;
    }
  };

  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("todoState", serializedState);
    } catch (error) {
      console.log("ERROR SAVING STATE -->", error);
    }
  };

  let initialState = loadState();

  switch (action.type) {
    case "ADD_TODO":
      const newStateAdd = [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
      saveState(newStateAdd);
      return newStateAdd;
    case "DELETE_TODO":
      const newStateDel =  state.filter((todo) => todo.id !== action.id);
      saveState(newStateDel);
      return newStateDel;
    case "EDIT_TODO":
      const newStateEdit = state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
      saveState(newStateEdit);
      return newStateEdit;
    case "TASK_DONE":
      const newStateDone =  state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      saveState(newStateDone);
      return newStateDone;
    default:
      return initialState ? initialState : state;
  }
}

export default todos;

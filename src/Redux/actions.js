export const addTask = (text) =>({
    type : "ADD_TODO",
    text,
});

export const deleteTask = (id) =>({
    type:"DELETE_TODO",
    id,
});

export const editTask = (id,text) =>({
    type:"EDIT_TODO",
    id,
    text,
});

export const doneTask = (id) => {
    return {
      type: "TASK_DONE",
      id, // if the action requires an id for the task
    };
  };
  
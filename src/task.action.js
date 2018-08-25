export const addTask = 'ADD_TASK';

export const onAddTask = data => {
  return {
    type: addTask,
    payload: data,
  };
};

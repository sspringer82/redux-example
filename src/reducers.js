import { combineReducers } from 'redux';
import { tasks } from './task.reducer';

const taskApp = combineReducers({
  tasks,
});

export { taskApp };

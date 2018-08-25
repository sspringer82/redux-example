import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onAddTask } from './task.action';

import { TaskForm } from './form.component';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onAddTask }, dispatch);
};

export const FormContainer = connect(null, mapDispatchToProps)(TaskForm);

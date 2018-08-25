import { connect } from 'react-redux';
import { ListComponent } from './list.component';

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

export const ListContainer = connect(mapStateToProps)(ListComponent);

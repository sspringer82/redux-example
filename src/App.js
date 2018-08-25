import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { taskApp } from './reducers';
import { FormContainer } from './form.container.component';
import { ListContainer } from './list.container.component';

const store = createStore(taskApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FormContainer />
          <ListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;

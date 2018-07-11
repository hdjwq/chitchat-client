import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import storeFn from './store'
import rootSaga from './saga'
import Index from './page'
const store=storeFn();
store.run(rootSaga);
class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <Router>
          <Index/>
        </Router>
        </Provider>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.less';
import "./style.less"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

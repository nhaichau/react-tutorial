import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import ClassApp from './ClassApp';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ClassApp />, document.getElementById('root'));

serviceWorker.unregister();

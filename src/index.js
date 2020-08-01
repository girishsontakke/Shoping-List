import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';  
import Counter from './components/counter';

ReactDOM.render(<Counter/> , document.querySelector("#root"));

serviceWorker.unregister();
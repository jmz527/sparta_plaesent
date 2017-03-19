import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main';


// import all styles
// import './materialize.css';
import './style.css';

ReactDOM.render(<Main />, document.getElementById('root'));

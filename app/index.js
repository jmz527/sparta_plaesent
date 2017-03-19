import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main';


// import all styles
import './public/materialize.css';
import './public/style.css';

ReactDOM.render(<Main />, document.getElementById('root'));

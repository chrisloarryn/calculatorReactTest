import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const initialValue = '123'

ReactDOM.render(<App initialValue={initialValue} />, document.getElementById('root'));

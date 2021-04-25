import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './App.scss';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React, { useEffect, useReducer,  useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Login from './component/Login';
import Register from './component/Register';
import TodoList from './component/TodoList';
import Feedback from './component/Feedback';
import Mycomponent from './Mycomponent';
import {BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Example from './Example';
import { Mycontext } from './Mycontext';
import './index.css';
import Home from './component/home';
const root = document.getElementById('root');
const VirtualRoot = ReactDOM.createRoot(root);



VirtualRoot.render(
  <Router>
    
  <Home></Home>
    <Routes>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register />}></Route>
  </Routes>
  </Router>
);import React, { useEffect, useReducer,  useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Login from './component/Login';
import Register from './component/Register';
import TodoList from './component/TodoList';
import Feedback from './component/Feedback';
import Mycomponent from './Mycomponent';
import {BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Example from './Example';
import { Mycontext } from './Mycontext';
import './index.css';
import Home from './component/home';
const root = document.getElementById('root');
const VirtualRoot = ReactDOM.createRoot(root);



VirtualRoot.render(
  <Router>
    
  <Home></Home>
    <Routes>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register />}></Route>
  </Routes>
  </Router>
);
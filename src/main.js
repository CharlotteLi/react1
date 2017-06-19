import React,{Component,Children} from 'react';
import ReactDom,{render,findDOMNode} from 'react-dom';

import root from './routers/index.js';
import 'antd/dist/antd.css';
import "./assets/fonts/iconfont.css";

render(root,document.getElementById('app'));
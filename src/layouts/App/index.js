import React from 'react';
import {Link} from 'react-router';

import MenuList from '../Menu/index.js';
import './index.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component{
    render(){
        return(
            <div className="appWrap">
                <div className="app-menu">
                    <MenuList/>
                </div>
                <div className="app-container">
                    <ReactCSSTransitionGroup
                        className="app"
                        component="div"
                        transitionName="app"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={5000}
                        >
                        <div className="inner" key={this.props.location.pathname}>
                            {this.props.children}
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>

        )
    }
}

import React from "react";
import {Link} from 'react-router';

export default class App extends React.Component{
    render(){
        return (
            <div>
                <h1>这是导航菜单</h1>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/about">关于我</Link>
                    </li>
                    <li>
                        <Link to="/skill">工作技能</Link>
                    </li>
                    <li>
                        <Link to="/project">项目经验</Link>
                    </li>
                    <li>
                        <Link to="/contact">联系我吧</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
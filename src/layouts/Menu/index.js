import React from 'react';
import {Link} from  'react-router';
import {Menu,Icon} from 'antd';

import './index.css';
export default class MenuList extends React.Component{
    showMenuItem(data){
        return data.map(info=>(
            <Menu.Item key={info.path}>
                <Link to={info.path=="index"?"/":"/"+info.path} className="menu-text">
                    <i className={"iconfont icon-"+info.path}></i>
                    <span className="menu-text">{info.name}</span>
                </Link>
            </Menu.Item>
        ))
    }
    render(){
        var data=[
            {"path":"index","name":"首页"},
            {"path":"about","name":"关于我"},
            {"path":"skill","name":"工作技能"},
            {"path":"project","name":"项目经验"},
            {"path":"contact","name":"联系我吧"}
        ];
        return(
            <div className="menu">
                <div className="menu-nav">
                    <i className="iconfont icon-jianli"></i>
                   Aaron
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["index"]}
                    theme="dark"
                    >
                    {this.showMenuItem(data)}
                </Menu>
                <div className="menu-aside">
                    <Icon type="left"></Icon>
                </div>
            </div>
        )
    }
}
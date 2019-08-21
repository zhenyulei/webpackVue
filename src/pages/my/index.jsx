import React, {Component} from 'react'
import { withRouter, Link } from "react-router-dom";

class My extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      myname:'第二页'
    };
  }
  componentDidMount(){
  }
  callbackPage(){
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
       <h2>你好 {this.state.myname}</h2>
       <div onClick={()=>{this.callbackPage()}}>点击我进行路由跳转</div>
      </div>
    );
  }
}

export default My
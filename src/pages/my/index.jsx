// Greeter.js
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
// import {getData} from '../api/index.js'
// import '../../css/sendIndex.scss'

class My extends Component{
  constructor(props) {
    super(props);
    this.state = {
      myname:'第二页'
    };
  }


  componentDidMount(){
  	// getData().then((data)=>{
  	// 	console.log(data);
  	// });
  }

  render() {
    return (
      <div>
       <h2>你好 {this.state.myname}</h2>
       <Link to="/">点击我进行路由跳转</Link>
      </div>
    );
  }
}

export default My
// Greeter.js
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {getData} from '@/api/index.js'
import './css/index.scss'

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      myname:'xiaohua'
    };
  }
  
  componentDidMount(){
    this.initPage();
  }
  async initPage(){
    let  data  = await getData();
    console.log(data);
  }
  render() {
    return (
      <div>
       <h2 className="box">你好 {this.state.myname}</h2>
       <Link to="/my">点击我进行路由跳转</Link>
      </div>
    );
  }
}

export default Home
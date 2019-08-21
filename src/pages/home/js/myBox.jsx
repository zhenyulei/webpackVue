import React, { Component } from 'react';
import { connect } from 'react-redux'
import {actionCreators} from '../store';
import { Link } from "react-router-dom";

import '@/pages/home/css/index.scss';
import classmates from 'classnames';
//傻瓜函数
class MyBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      btnFlag:false
    }
  }
  componentDidMount(){
    
  }
  clickBtns(){
    let flag = this.state.btnFlag;
    this.setState({
      btnFlag:!flag
    })
    this.props.getMyListData();
  }
  render() {
    const {inputValue,changeInput,myList,mydata} = this.props;
    const { btnFlag } = this.state;
    return (
      <div className="app">
        <label htmlFor="box">
          输入信息{ inputValue}--{mydata}
          <br/>
          <input id="box" 
            value = {inputValue} 
            onChange ={changeInput}
          />
          </label>
          {
            myList.floorInfo && myList.floorInfo.title && 
            <p>{myList.floorInfo.title}</p>
          }
          <button onClick={()=>{this.clickBtns()}} className={classmates("data-box",{'change-box':btnFlag})}>点击我获取数据</button>
          <Link to="/my">点击我跳转到my</Link>
      </div>
    );
  }

}
const mapStateToProps = (state)=> {
  return (
    {
      inputValue:state.home.inputValue,
      myList:state.home.list,
      mydata:state.my.myData
    }
  )
};
const mapDispatchToProps = (dispatch)=>{
  return {
    changeInput(e){
      dispatch(actionCreators.changeInputValue(e.target.value))
    },
    async getMyListData(){
      dispatch(actionCreators.getListData())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyBox);
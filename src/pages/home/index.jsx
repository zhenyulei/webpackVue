import React, { Component } from 'react';
import MyBox from './js/myBox.jsx';
class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <MyBox/>
      </div>
    );
  }
}

export default Home;
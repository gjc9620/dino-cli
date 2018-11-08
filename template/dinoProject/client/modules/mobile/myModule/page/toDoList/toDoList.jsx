import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
import View from 'myModule/View';
import commonFunction from 'myModule/commonFunction';

class toDoList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // componentDidMount() {}
  render() {
    return (
      <View onClick={()=>commonFunction('mobile')}>
        <section className='to-do-list-mobile'>todo</section>
      </View>
    )
  }
}

toDoList.defaultProps = {

};

export default toDoList;


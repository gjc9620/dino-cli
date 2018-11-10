import React, { Component, PropTypes } from 'react';
import Iconfont from 'components/Iconfont';
import fetchAPI from 'utils/fetch';
import JSBridge from 'za-jsbridge';
import classnames from 'classnames';
import { connect } from 'react-redux';

class View extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // componentDidMount() {}
  render() {
    return (
      <section className='view'>{ this.props.child }</section>
    )
  }
}

View.defaultProps = {

};

export default View;


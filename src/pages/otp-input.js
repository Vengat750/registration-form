import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOtp } from '../actions';

import '../css/email-verification.css';

class Otp extends Component {
  constructor(props) {
    super(props);
    this.digit1 = React.createRef();
    this.digit2 = React.createRef();
    this.digit3 = React.createRef();
    this.digit4 = React.createRef();
    this.digit5 = React.createRef();
  }

  handleChange = () => {
    let otp = this.digit1.current.value + this.digit2.current.value + this.digit3.current.value + this.digit4.current.value + this.digit5.current.value;
    if (otp.length === 5) {
      this.props.setOtp(otp);
    }
  }

  render() {
    return (
      <div className='otp-container' onChange={this.handleChange}>
        <input className='otp-digits' name='digit1' type='text' ref={this.digit1} maxLength='1' onChange={event => this.digit2.current.focus()} />
        <input className='otp-digits' name='digit2' type='text' ref={this.digit2} maxLength='1' onChange={event => this.digit3.current.focus()} />
        <input className='otp-digits' name='digit3' type='text' ref={this.digit3} maxLength='1' onChange={event => this.digit4.current.focus()} />
        <input className='otp-digits' name='digit4' type='text' ref={this.digit4} maxLength='1' onChange={event => this.digit5.current.focus()} />
        <input className='otp-digits' name='digit5' type='text' ref={this.digit5} maxLength='1' />
      </div>
    );
  }
}


export default connect(null, { setOtp })(Otp);




import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PageDescription from './page-description';
import Header from './header';
import Otp from './otp-input';

import '../css/personal-details.css';
import '../css/email-verification.css';


const EmailVerification = props => {
    const { handleSubmit, details } = props;
    let otp = details.otp;
    let disable = 'disable';
    if (otp) {
        disable = '';
    }

    const handleChange = (event) => {
        event.preventDefault();
        props.history.push('/company-details');
    }

    localStorage.setItem('user', JSON.stringify(details))

    const onSubmit = (values, props) => {
        localStorage.setItem('user', JSON.stringify(details));
        props.history.push('/sucessfully-registered');
    }

    return (
        <div>
            <Header head1='completed' head2='completed' head3='active' />
            <div className='main-form'>
                <PageDescription heading='Enter your OTP' description='For your security, we need to verify your identity. We sent a 5-digit code to name@domain.com.Please enter it below' />
                <form onSubmit={handleSubmit(values => { onSubmit(values, props); })} >
                    <div className='box'>
                        <div className='container'>
                            <div className='otp-box'>
                                <label>Enter your code</label>
                                <div className=''>
                                    <Field
                                        name='otp'
                                        component={Otp}
                                        name1='1'
                                        name2='2'
                                    />
                                </div>
                            </div>
                            <div className='buttons'>
                                <button className='back' type='button' onClick={e => handleChange(e)} >Back</button>
                                <button className={`otp ${disable}`} type="submit" >Verify</button>
                            </div>
                            <div className='verification'>
                                <p >Didn't receive the email? Check your spam filter for an email <br /><span className='line-break'>from < span className='domain'>name@domain.com</ span></span></p>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        details: state.details,
    }
}

let EmailVerifications = connect(mapStateToProps)(EmailVerification);

export default reduxForm({ form: 'emailVerification' })(EmailVerifications);

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { setFormValues } from '../actions';
import PageDescription from './page-description';
import Header from './header';
import Logo from './logo';

import '../css/personal-details.css';
import '../css/company-details.css';

const required = value => value ? undefined : 'Required'
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined

const CompanyDetails = props => {
    const { handleSubmit, invalid } = props;
    let disable = 'disable';
    if (!invalid) {
        disable = '';
    }
    const onSubmit = (values, dispatch) => {
        dispatch(setFormValues(values))
        props.history.push('/email-verification');
    }
    const handleChange = event => {
        event.preventDefault();
        props.history.push('/')
    }

    return (
        <div>
            <Header head1='completed' head2='active' head3='inactive' />
            <div className='main-form'>
                <PageDescription className='description' heading='Add your Company Details' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='box'>
                        <div className='container'>
                            <div>
                                <Field
                                    name="logo"
                                    component={Logo}
                                />
                            </div>
                            <div>
                                <label>Company Name</label>
                                <div>
                                    <Field
                                        name="companyName"
                                        component="input"
                                        type="text"
                                        maxLength="40"
                                        validate={[required]}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Email id</label>
                                <div>
                                    <Field
                                        name="emailId"
                                        component="input"
                                        type="text"
                                        maxLength="40"
                                        validate={[required, email]}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Job Title</label>
                                <div>
                                    <Field
                                        name="jobTitle"
                                        component="input"
                                        type="text"
                                        maxLength="40"
                                        validate={[required]}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Years of Experience</label>
                                <div>
                                    <Field
                                        name="yearsOfExperience"
                                        component="input"
                                        type="text"
                                        maxLength="1"
                                        validate={[required, number]}
                                    />
                                </div>
                                <div className='checkbox-container'>
                                    <div className='checkbox'>
                                        <Field
                                            name="accepted"
                                            id="accepted"
                                            component="input"
                                            type="checkbox"
                                            validate={[required]}
                                        />
                                    </div>
                                    <div className='checkbox-acceptance'><p>I accept the <span className='link'>Terms and Conditions</span></p></div>
                                </div>
                            </div>
                            <div className='buttons'>
                                <button type='button' className='back' onClick={e => handleChange(e)}>Back</button>
                                <button className={`otp ${disable}`} type="submit" disabled={invalid}>SendOTP</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};


let CompanyDetail = connect(null, { setFormValues })(CompanyDetails);

export default reduxForm({ form: 'companyDetails' })(CompanyDetail);

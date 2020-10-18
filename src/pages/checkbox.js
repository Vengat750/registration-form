import React from 'react';
import { connect } from 'react-redux';
import { setGender } from '../actions';

import '../css/personal-details.css';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBox1: '',
            showBox2: '',
            showBox3: '',
        }
    }
    onClick = (event) => {
        this.props.setGender(event.target.id);

        if (event.target.id === 'male') {
            this.setState({
                showBox1: 'show',
                showBox2: '',
                showBox3: ''
            });
        } else if (event.target.id === 'female') {
            this.setState({
                showBox1: '',
                showBox2: 'show',
                showBox3: ''
            });
        } else if (event.target.id === 'other') {
            this.setState({
                showBox1: '',
                showBox2: '',
                showBox3: 'show',
            });
        }
    }

    render() {
        return (
            <div className='flex-container'>
                <div id='male' onClick={e => this.onClick(e)} name='showbox1' value='male' className={`${this.state.showBox1} checkbox-item`}>Male</div>
                <div id='female' onClick={e => this.onClick(e)} name='showbox2' value='female' className={`${this.state.showBox2} checkbox-item`}>Female</div>
                <div id='other' onClick={e => this.onClick(e)} name='showbox3' value='other' className={`${this.state.showBox3} checkbox-item`}>Other</div>
            </div>
        );
    }
}

export default connect(null, { setGender })(Checkbox);

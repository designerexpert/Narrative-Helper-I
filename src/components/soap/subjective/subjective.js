import React, { Component } from 'react';
import './subjective.css';

class SoapDescription extends Component {
    constructor() {
        super();
        this.state = {
            desc: '',
            styleOuter: 'soap__section__description',
            styleInner: 'soap__description--inner',
            outer: true,
        }
    }
    componentDidMount() {
        this.setState({desc: this.props.desc, outer: this.props.isouter});
        console.log(this.props.isouter)
    }

    handleClick = () => {

    }

    render() {
        let returnVal = (
            <div className={this.state.styleOuter} onClick={this.handleClick}>
                {this.state.desc}
            </div>
        );
        if (this.state.outer === 'false') {
            console.log('State is False');
            returnVal = (
                <div className={String(this.state.styleInner)} onClick={this.handleClick}>
                    {this.state.desc}
                </div>
            );
        }
        return returnVal;
    }
}

class SoapSelection extends Component {
    constructor() {
        super();
        this.state = {
            desc: '',
            style: 'soap__selection',
            styleToggle: false,
        }
    }
    componentDidMount() {
        this.setState({desc: this.props.desc});
    }

    handleClick = (evt) => {
        if (this.state.styleToggle === false) {
            this.setState({style: 'soap__slection--clicked', styleToggle: true});
            return;
        } else if (this.state.styleToggle === true) {
            this.setState({style: 'soap__selection', styleToggle: false});
            return;
        }
    }

    render() {
        let returnVal = (
            <div className={this.state.style} onClick={this.handleClick}>
                {this.state.desc}
            </div>
        );
        if (this.state.styleToggle) {
            returnVal = (
                <div className={this.state.style} onClick={this.handleClick}>
                    <b>{this.state.desc}</b>
                </div>
            );
        }

        return returnVal;
    }
}


class Subjective extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return(
        <div className='soap'>
            <div className='soap__heading'>ROS: <b>(HIGHLIGHT POSITIVE ONLY)</b></div>
            <div className='soap__section'>
                <div className='description'>
                    <SoapDescription desc='CONSITUTIONAL:' isouter='true'/>
                </div>
                <div className='selections'>
                    <SoapSelection desc='FEVER' />
                    <SoapSelection desc='CHILLS' />
                    <SoapDescription desc='WEIGHT:' isouter='false'/>
                    <SoapSelection desc='LOSS' />
                    <SoapDescription desc='/' isouter='false'/>
                    <SoapSelection desc='GAIN' />
                    <SoapDescription desc='' isouter='false'/>
                    <SoapSelection desc='WEAKNESS GENERAL' />
                </div>
            </div>
            <div className='soap__section'>
                <div className='description'>
                    <SoapDescription desc='EYES:'/>
                </div>
                <div className='selections'>
                    <SoapSelection desc='BLURRED VISION' />
                    <SoapSelection desc='SECRETIONS' />
                    <SoapSelection desc='REDNESS' />
                    <SoapSelection desc='ITCHING' />
                    <SoapSelection desc='GLAUCOMA' />
                    <SoapSelection desc='CATARACTS' />
                </div>
            </div>
            <div className='soap__section'>
                <div className='description'>
                    <SoapDescription desc='E.N.T.:'/>
                </div>
                <div className='selections'>
                    <SoapSelection desc='EARACHE' />
                    <SoapSelection desc='NASAL DISCHARGE' />
                    <div className='description--inner'>
                        <SoapDescription desc='NOSE' isouter='false'/>
                        <SoapSelection desc='ITCHY' />
                        <SoapDescription desc='/' isouter='false'/>
                        <SoapSelection desc='RUNNY' />
                        <SoapDescription desc='/' isouter='false'/>
                        <SoapSelection desc='BLOODY' />
                    </div>
                    <SoapSelection desc='SORE THROAT' />
                    <SoapSelection desc='POSTNASAL DRIP' />
                    <SoapSelection desc='HOARSENESS' />
                    <SoapSelection desc='SINUS PAIN' />
                </div>                
            </div>
            <div className='soap__section'>
                <div className='description'>
                    <SoapDescription desc='RESPIRATORY:'/>
                </div>
                <div className='selections'>
                    <SoapSelection desc='COUGH' />
                    <SoapSelection desc='(DRY PRODUCTIVE)' />
                    <SoapSelection desc='SOB' />
                    <SoapSelection desc='WHEEZING' />
                    <div className='description--inner'>
                        <SoapDescription desc='SOB:' isouter='false'/>
                        <SoapSelection desc='WITH EFFORT' />
                        <SoapDescription desc='/' isouter='false'/>
                        <SoapSelection desc='LYING' />
                    </div>
                </div>                
            </div>
            <div className='soap__section'>
                <div className='description'>
                    <SoapDescription desc='CARDIOVASCULAR:'/>
                </div>
                <div className='selections'>
                    <SoapSelection desc='CHEST PAIN' />
                    <SoapDescription desc='/' isouter='false'/>
                    <SoapSelection desc='PRESSURE' />
                    <SoapDescription desc='/' isouter='false'/>
                    <SoapSelection desc='TIGHTNESS' />
                    <SoapSelection desc='PALPITATIONS' />
                    <SoapSelection desc='EDEMA LOWER EXTREMITIES' />
                    <SoapSelection desc='LEG CRAMPS' />
                </div>                
            </div>


        </div>
        );
    }
}

export default Subjective;
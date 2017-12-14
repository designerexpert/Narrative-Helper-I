import React, { Component } from 'react';
import './subjective.css';
import { connect } from 'react-redux';
import { getData } from '../../../actions';

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
        this.setState({ desc: this.props.desc, outer: this.props.isouter });
        // console.log(this.props.isouter)
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
            // console.log('State is False');
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
        this.setState({ desc: this.props.desc });
    }

    handleClick = (evt) => {
        if (this.state.styleToggle === false) {
            this.setState({ style: 'soap__slection--clicked', styleToggle: true });
            return;
        } else if (this.state.styleToggle === true) {
            this.setState({ style: 'soap__selection', styleToggle: false });
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


const dDesc = 'divisionDescription';
const sDesc = 'SoapDescription';
const sSel = 'SoapSelection';
const innerDivDesc = 'innerDivDesc';

class Narrative extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        console.log('Narrative props: ', this.props.state.ros)
        return (
            <div>
                {this.props.state.ros.map((item, index) => {
                    return (
                        <div className='soap' key={index}>
                            <div className='soap__heading' key={index}>
                                {item.divDesc}
                            </div>
                            <div>
                                {item.divContent.map((item, index) => {
                                    return (
                                        <div className='soap__section' key={index}>
                                            <div className='description' key={index}>
                                                {item.subDivDesc}
                                            </div>
                                            <div className='selections' key={index}>
                                                {item.subDivContent.map((item, index) => {
                                                    if (item.type === sSel) {
                                                        return (
                                                            <SoapSelection desc={item.text} key={index}/>
                                                        );
                                                    } else {
                                                        return (
                                                            <div className='InnerSelections' key={index}>
                                                                <SoapDescription desc={item.text} isouter='false' />
                                                                {item.content.map((item, index) => {
                                                                    if (item.type === sSel) {
                                                                        return (
                                                                            <SoapSelection desc={item.text} key={index}/>
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <SoapDescription desc={item.text} isouter='false' key={index}/>
                                                                        );
                                                                    }
                                                                })}
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, { getData })(Narrative);
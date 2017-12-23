import './SoapSelection.css';
import React, { Component } from 'react';

class SoapSelection extends Component {
    constructor() {
        super();
        this.state = {
            desc: '',
            style: 'SS__selection',
            styleToggle: false,
        }
    }
    componentDidMount() {
        this.setState({ desc: this.props.desc });
    }

    handleClick = (evt) => {
        if (this.state.styleToggle === false) {
            this.setState({ style: 'SS__slection--clicked', styleToggle: true });
            return;
        } else if (this.state.styleToggle === true) {
            this.setState({ style: 'SS__selection', styleToggle: false });
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
                    {this.state.desc}
                </div>
            );
        }

        return returnVal;
    }
}

export default SoapSelection;
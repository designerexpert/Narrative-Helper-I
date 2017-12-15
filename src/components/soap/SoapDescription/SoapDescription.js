import './SoapDescription.css';
import React, { Component } from 'react';

class SoapDescription extends Component {
    constructor() {
        super();
        this.state = {
            desc: '',
            styleOuter: 'SD__description__outer',
            styleInner: 'SD__description__inner',
            outer: true,
        }
    }
    componentDidMount() {
        this.setState({ desc: this.props.desc, outer: this.props.isouter });
    }

    render() {
        let returnVal = (
            <div className={this.state.styleOuter}>
                {this.state.desc}
            </div>
        );
        if (this.state.outer === 'false') {
            returnVal = (
                <div className={String(this.state.styleInner)}>
                    {this.state.desc}
                </div>
            );
        }
        return returnVal;
    }
}

export default SoapDescription;
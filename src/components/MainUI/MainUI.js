import React, { Component } from 'react';
import './MainUI.css';
import { connect } from 'react-redux';
import { getRos, getNarrative } from '../../actions';
// Import Child Components Here
import SoapDescription from '../soap/SoapDescription/SoapDescription';
import SoapSelection from '../soap/SoapSelection/SoapSelection';
import NarrativeBuilder from '../NarrativeBuilder/NarrativeBuilder'

const dDesc = 'divisionDescription';
const sDesc = 'SoapDescription';
const sSel = 'SoapSelection';
const innerDivDesc = 'innerDivDesc';

class MainUI extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getRos();
        this.props.getNarrative();
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.state.ros.map((item, index) => {
                        return (
                            <div className='MUI' key={item.index}>
                                <div className='MUI__heading' key={item.index}>
                                    {item.divDesc}
                                </div>
                                <div>
                                    {item.divContent.map((item, index) => {
                                        return (
                                            <div className='MUI__section' key={item.index}>
                                                <div className='MUI_description' key={item.index}>
                                                    {item.subDivDesc}
                                                </div>
                                                <div className='MUI__selections' key={item.index}>
                                                    {item.subDivContent.map((item, index) => {
                                                        if (item.type === sSel) {
                                                            return (
                                                                <SoapSelection desc={item.text} key={item.narrative} id={item.narrative}/>
                                                            );
                                                        } else {
                                                            return (
                                                                <div className='MUI__selections__inner' key={item.id}>
                                                                    <SoapDescription desc={item.text} isouter='false' />
                                                                    {item.content.map((item, index) => {
                                                                        if (item.type === sSel) {
                                                                            return (
                                                                                <SoapSelection desc={item.text} key={item.narrative} id={item.narrative}/>
                                                                            );
                                                                        } else {
                                                                            return (
                                                                                <SoapDescription desc={item.text} isouter='false' key={item.i} />
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
                <NarrativeBuilder />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, { getRos, getNarrative })(MainUI);
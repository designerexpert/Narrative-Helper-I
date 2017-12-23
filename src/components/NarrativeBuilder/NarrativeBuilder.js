import './NarrativeBuilder.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNarrative } from '../../actions';

class NarrativeBuilder extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentdidMount() {

    }
    render() {
        console.log('Narrative Builder Props', this.props);
        return (
            <div className='Narrative'>
                This is a placeholder for the NarrativeBuilder
            </div>
        );
    }
}

// export default NarrativeBuilder;

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, { getNarrative })(NarrativeBuilder);
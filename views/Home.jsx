import React from 'react';
import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

export default class Home extends React.Component {
    render() {
        return (

            <div className="container">
                <Header  />
            </div>
        );
    }
}

Home.contextTypes = { history: PropTypes.history };

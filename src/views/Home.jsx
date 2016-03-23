import React from 'react';
import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

const cookieAuthentication = 'cookieMonster';
export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Header  />
                <h1>welcome by Calendar</h1>
            </div>
        );
    }
}

Home.contextTypes = { history: PropTypes.history };

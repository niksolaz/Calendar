import React, { Component } from 'react';
import cookie from 'react-cookie';
import {Link} from 'react-router';
import classnames from 'classnames';


export default class Navigation extends Component {
  render() {
    return (
      <nav class="navbar navbar-default">
		  <div class="container-fluid">
		    <div class="navbar-header">
		      <a class="navbar-brand" href="http://localhost:3000">
		        Home
		      </a>
		    </div>
		  </div>
		</nav>
    );
  }
}
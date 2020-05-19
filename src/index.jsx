import * as $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import './babel';
import Post from '@models/Post';
import './styles/styles.css';
import './styles/less.less';
import './styles/sass.scss';
import json from './assets/json';
import webPackLogo from './assets/webpack-logo';
import xml from './assets/data.xml';
import csv from './assets/data.csv';

const post = new Post('Webpack post title', webPackLogo);
$('pre').addClass('code').html(post.toString());

const App = () => (
  <div id="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo" />
    <pre />

    <div className="box">
      <h2>Less</h2>
    </div>

    <div className="card">
      <h2>Sass</h2>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
console.log('json:', json);
console.log('xml:', xml);
console.log('csv:', csv);

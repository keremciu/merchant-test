import React from 'react';
import {
  Route,
} from 'react-router-dom'
import ListContainer from './Container';

export default [
  <Route path="/" key="list" component={ ListContainer } />,
];


/* <Route path="/new" key="list" component={ CreateContainer } />,
  <Route path="/1" key="list" component={ EditContainer } />, */
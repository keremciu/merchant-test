import React from 'react';
import { Route } from 'react-router-dom'
import ListContainer from './List/Container';
import AddContainer from './Add/Container';
import EditContainer from './Edit/Container';
import DetailContainer from './Detail/Container';

export default [
  <Route exact path="/" key="list" component={ ListContainer } />,
  <Route exact path="/add/" key="add" component={ AddContainer } />,
  <Route exact path="/edit/:id" key="edit" component={ EditContainer } />,
  <Route exact path="/:id" key="detail" component={ DetailContainer } />,
];
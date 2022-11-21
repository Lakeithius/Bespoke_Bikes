import '../styles/custom.css';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';

import { Layout } from '../components/Layout';
import { Home } from '../components/Home';

import Salespersons from '../components/Salespersons';
import Customers from '../components/Customers';
import Products from '../components/Products';
import Sales from '../components/Sales';
import AddSale from '../components/AddSale';
import EditSalesperson from '../components/EditSalesperson';


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/sales' component={Sales} />
        <Route path='/addsale' component={AddSale} />
        <Route path='/products' component={Products} />
        <Route path='/customers' component={Customers} />
        <Route path='/salespersons' component={Salespersons} />
        <Route path='/editsalesperson' component={EditSalesperson} />
      </Layout>
    );
  }
}

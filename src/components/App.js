import React, { Component } from 'react';
import {  Route } from 'react-router-dom';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import FilterableProductTable from './FilterableProductTable';
import Home from './Home'



class App extends Component {
  render() {
    return (
      <div>
        
            <Route exact path='/' component={Home} />
            <Route exact path='/SearchBar' component={SearchBar} />
            <Route exact path='/ProductTable' component={ProductTable} />
            <Route exact path='/FilterableProductTable' component={FilterableProductTable} />
            

      </div>
    );
  }
}

export default App;
import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import {getDirections} from './redux/reducers/filterReducer';
import SearchForm from './components/SearchForm/SearchFormContainer';
import Items from './components/Items/ItemsContainer';

const App = ({getDirections}) => {

  useEffect(() => {
    getDirections();
  }, [getDirections]);

  return (
    <div className = 'container' >
      <SearchForm />
      <Items />
    </div>
  );
}

export default connect (null, {getDirections})(App);

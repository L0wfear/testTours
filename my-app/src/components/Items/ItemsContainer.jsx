import React from 'react';
import { connect } from 'react-redux';
import Items from './Items';

const ItemsContainer = (props) => {

    return <Items  {...props} />
        
}

const mapStateToProps = (state) => {
    return {
        items: state.items.items,
        isFetching: state.items.isFetching
    }
}

export default connect (mapStateToProps, null)(ItemsContainer);
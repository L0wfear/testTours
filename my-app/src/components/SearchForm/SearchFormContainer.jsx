import React from 'react';
import { reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import {getItems} from '../../redux/reducers/searchReducer';

const SearchFormContainer = (props) => {

    const onSubmit = (formData) => {
        const {cityID = '1', 
               countryID = '29', 
               dateFrom = new Date(+new Date() + 30 * 24 * 3600 * 1000), 
               dateTo = new Date(+new Date() + 44 * 24 * 3600 * 1000)
              } = formData;

        props.getItems(cityID, 
                       countryID,
                       `${dateFrom.getFullYear()}-${dateFrom.getMonth() + 1}-${dateFrom.getDate()}`, 
                       `${dateTo.getFullYear()}-${dateTo.getMonth() + 1}-${dateTo.getDate()}`
                     );
    }

    return (
        <div className="search_form my-3">
            <SearchFormRedux onSubmit={onSubmit} 
                             departureCities = {props.departureCities} 
                             countries = {props.countries} />
        </div>
    )
}


const SearchFormRedux = reduxForm({ form: 'search' })(SearchForm);

const mapStateToProps = (state) => {
    return {
        departureCities: state.directions.departureCities,
        countries: state.directions.countries,
        links: state.directions.links
    }
}

export default connect (mapStateToProps, {getItems})(SearchFormContainer);
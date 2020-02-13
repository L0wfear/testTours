import React, { useState } from 'react';
import { Field } from 'redux-form';
import { Select, RenderDatePicker } from '../../common/FormsControl';

const SearchForm = (props) => {
    const [dateFrom, setdateFrom] = useState(+new Date() + 30 * 24 * 3600 * 1000);
    const [dateTo, setdateTo] = useState(+new Date() + 44 * 24 * 3600 * 1000);

    return (
        <div >
            <form onSubmit={props.handleSubmit} >
                <div className="d-flex justify-content-center" >
                    <Field name="cityID" component={Select} default = '1' options = {props.departureCities.map(e => e)} />
                    <Field name="countryID" component={Select} default = '29' options = {props.countries.map(e => e)} />
                    <Field name="dateFrom"  component={RenderDatePicker} onChange={date => setdateFrom(date)} startDate = {dateFrom} />
                    <Field name="dateTo"  component={RenderDatePicker} onChange={date => setdateTo(date)} startDate = {dateTo} />
                    <div className="col-auto">
                        <button type="submit" className="btn btn-success mb shadow-none">Поиск</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;

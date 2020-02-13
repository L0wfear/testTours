import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Select = ({ input, meta, ...props }) => {
    
    return (
        <div className={`col-md-2`} >
            <select {...input} {...props} value = {input.value || props.default} className="form-control mb">
                {props.options.map(e => <option key={e.id} value = {e.id }> {e.name} </option>)}
            </select>
        </div>)
}

export const RenderDatePicker = ({ input, ...props }) => {
    
    input.value = props.startDate;
    return (
        <div className={`col-md-2`}>
            <DatePicker {...input} dateFormat="dd.MM.yyyy" autoComplete = {'of'} selected={input.value}
             className="form-control mb" /> 
        </div>)
};
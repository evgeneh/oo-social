import React from 'react';

import s from  '../Forms.module.css'

//свой labeled checkbox, reverse регулирует появление подписи после или перед боксом
const CheckBox = ({meta, input, label, reverse, ...props}) => {
    const labelText =  (!! label) ? label : ""
    return (
        <div className={ s.labeledCB}>
            { reverse && <label htmlFor="rememberMe">{labelText}</label>}
            <input {...input} {...props} type="checkbox" />
            { (!reverse) && <label htmlFor="rememberMe">{labelText}</label>}
        </div>
    )}
export default CheckBox
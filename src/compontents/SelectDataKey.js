import React from 'react';
import {Select} from 'antd';

const SelectDataKey = ({value, onChange}) => {
    const options = [
        {value: 'cases', label: 'Cases'},
        {value: 'todayCases', label: 'Today Cases'},
        {value: 'deaths', label: 'Death'},
        {value: 'recovered', label: 'Recovered'},
        {value: 'active', label: 'Active'}
    ];
    return (
        <>
            <label htmlFor='key-select'>Select a key for sorting: </label>
            <Select className="key-select"
                    value={value}
                    options={options}
                    onChange={onChange}/>
        </>
    );
};

export default SelectDataKey;

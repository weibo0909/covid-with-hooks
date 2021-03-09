import React, {useState} from 'react';
import GlobalStats from '../compontents/GlobalStats';
import CountriesChart from '../compontents/CountriesChart';
import SelectDataKey from '../compontents/SelectDataKey';

import {useCoronaApi} from '../hooks/UseCoronaApi';

import '../assets/containers/Covid.css';

const Covid = ({}) => {

    const [key, setKey] = useState('cases'),

        globalStats = useCoronaApi('/all', {
            initialData: {},
            refetchInterval: 5000
        }),
        countries = useCoronaApi(`/countries?sort=${key}`,
            {
                initialData: [],
                converter: data => data.slice(0, 10)
            });

    return <div className="covid">
        <h1>COVID-19</h1>

        <GlobalStats stats={globalStats}/>

        <SelectDataKey value={key}
                       onChange={value => setKey(value)}/>
        <CountriesChart data={countries} dataKey={key}/>
    </div>;

};

export default Covid;
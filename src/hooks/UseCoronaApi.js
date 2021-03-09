import {useState, useCallback, useEffect} from 'react';

const BASE_URL = 'https://corona.lmao.ninja/v2';

const useCoronaApi = (
    path,
    {
        initialData = null,
        converter = (data) => data,
        refetchInterval = null
    }
) => {
    const [data, setData] = useState(initialData),
        converterData = useCallback(converter, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${BASE_URL}${path}`);
            const data = await response.json();
            setData(converterData(data));
        };
        fetchData();

        if (refetchInterval) {
            const intervalId = setInterval(fetchData, refetchInterval);
            return () => clearInterval(intervalId);
        }
    }, [converterData, path, refetchInterval]);

    return data;
};
export {
    useCoronaApi
};
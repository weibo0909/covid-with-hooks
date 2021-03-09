import {React} from 'react';
import {Table} from 'antd';

const GlobalStats = ({stats}) => {
    const {cases, deaths, recovered, active, updated} = stats, columns = [{
        title: 'Cases',
        dataIndex: 'cases',
        key: 'cases'
    }, {
        title: 'Deaths',
        dataIndex: 'deaths',
        key: 'deaths'
    }, {
        title: 'Recovered',
        dataIndex: 'recovered',
        key: 'recovered'
    }, {
        title: 'Active',
        dataIndex: 'active',
        key: 'active'
    }], dataSource = [{
        cases: <span style={{color: 'red', fontWeight: 'bold'}}>{cases}</span>,
        deaths: <span style={{color: 'gray', fontWeight: 'bold'}}>{deaths}</span>,
        recovered: <span style={{color: 'green', fontWeight: 'bold'}}>{recovered}</span>,
        active: <span style={{color: 'orange', fontWeight: 'bold'}}>{active}</span>
    }];
    return (
        <div className='global-stats'>
            <small>Updated on {new Date(updated).toLocaleString()}</small>
            <Table columns={columns}
                   dataSource={dataSource}
                   pagination={false}>
            </Table>
        </div>
    );
};

export default GlobalStats;

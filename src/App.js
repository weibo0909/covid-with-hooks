import React from 'react';
import Covid from './containers/Covid';
import {Layout, Menu} from 'antd';

import './App.css';
import 'antd/dist/antd.min.css';

const App = () => {

    const {Header, Sider, Content} = Layout;

    return (
        <div className="app">
            <Layout className="app-content">
                <Header className="app-header">
                    <div className="logo"/>
                    <Menu className="app-nav"
                          theme="light"
                          mode="horizontal"
                          defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider trigger={null}
                           theme="light"
                           collapsible>
                        <Menu theme="light"
                              mode="inline"
                              defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                nav 1
                            </Menu.Item>
                            <Menu.Item key="2">
                                nav 2
                            </Menu.Item>
                            <Menu.Item key="3">
                                nav 3
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content>
                            <Covid/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
};

export default App;

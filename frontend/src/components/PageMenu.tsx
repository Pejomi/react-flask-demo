import { useState } from 'react';
import {
    HomeOutlined,
    BarChartOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../assets/styles/App.css';
const { Sider } = Layout;

const PageMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '0',
                        icon: <>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</>,
                        onClick: () => setCollapsed(!collapsed),
                        className: 'collapsed-menu-item',
                    }
                ]}
            />
            <br />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <Link to="/"><HomeOutlined /></Link>,
                        label: 'Home',
                    },
                    {
                        key: '2',
                        icon: <Link to="/first"><BarChartOutlined /></Link>,
                        label: 'First Page',
                    },
                ]}
            />
        </Sider>
    );
}

export default PageMenu;
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { useAppSelector } from '@/redux/hooks';

const items: MenuProps["items"] = [
  {
    key: '2',
    label: <NavLink to="/admin">Dashboard</NavLink>,
  },
  {
    key: '3',
    label: "Product Management",
    children: [
      {
        key: '4',
        label: <NavLink to="/admin/create-facility">Create a Product</NavLink>,
      },
      {
        key: '5',
        label: <NavLink to="/admin/get-facility">Get all Product</NavLink>,
      },
    ]
  },
  {
    key: '11',
    label: <NavLink to="/">Home</NavLink>,
  },
]
const AdminLayout = () => {
  const { role } = useAppSelector((store) => store.user.user)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <div>
        <Layout style={{ height: '100vh' }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            trigger={null} collapsible collapsed={collapsed}
          >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
          </Sider>
          <Layout>

            <Header style={{ padding: 0, background: "#234e30" }}>
              <h1 className='text-3xl text-bold text-white p-2'>{role === 'admin' ? 'Admin Dashboard' : ''}</h1>
            </Header>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Content style={{ margin: '24px 16px 0' }}>
              <div
                style={{
                  padding: 24,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {/* the main content  here */}

                <Outlet></Outlet>
              </div>
            </Content>

          </Layout>
        </Layout>

      </div>
    </div>
  );
};

export default AdminLayout;
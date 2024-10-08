/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logOut } from '@/redux/feature/UserSlice';

const AdminLayout = () => {
  const dispatch = useAppDispatch()
  const handleLogOut = () => {
    dispatch(logOut())
  }
  const user = useAppSelector((store) => store.user?.user)

  if (!user) {
      return <p> </p>
  }
  const { role } = user
  const items: MenuProps["items"] = [
    {
      key: '2',
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
    },
    {
      key: '3',
      label: "Facility Management",
      children: [
        ...(role === 'admin' ? [ {
          key: '4',
          label: <NavLink to="/dashboard/admin/create-facility">Create a Facility</NavLink>,
        },
        {
          key: '5',
          label: <NavLink to="/dashboard/admin/get-facility">Get all Facility</NavLink>,
        },
        {
          key: '6',
          label: <NavLink to="/dashboard/admin/get-all-bookings">Get all Bookings</NavLink>,
        },
        {
          key: '7',
          label: <NavLink to="/dashboard/admin/create-admin">Create admin</NavLink>,
        },] : [ {
          key: '8',
          label: <NavLink to="/dashboard/user/my-bookings">my-bookings</NavLink>,
        }] ),

      ]
    },
    {
      key: '11',
      label: <NavLink to="/">Home</NavLink>,
    },
  ]

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
          {/* bg-[#8ac0e4] */}
            <Header style={{ padding: 0, background: "#8ac0e4" , display: "flex", justifyContent: "space-around"}}>
              <div>
              <h1 className='text-3xl text-bold p-2 uppercase text-sky-900 font-bold'> {role} dashboard</h1>

              </div>
              <div>
                <Button onClick={handleLogOut} className='font-bold'>Log Out</Button>
              </div>
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
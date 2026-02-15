import './App.css'
import { Outlet } from 'react-router-dom'
import { MainLayout, Sidebar, TopNavbar } from '@/components/layout'
import { Link } from 'react-router'

import { Breadcrumb, Layout } from 'antd'

function App() {
  return (
    <Layout className="h-screen overflow-auto">
      <div className="shadow-md relative z-10">
        <TopNavbar />
      </div>
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px', overflowY: 'auto' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link to="/test">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <MainLayout>
            <Outlet />
          </MainLayout>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App

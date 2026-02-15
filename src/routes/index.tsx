import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import Dashboard from '@/features/dashboard/pages/Dashboard'
import VitalTaskPage from '@/features/vital-task/pages/VitalTaskPage'
import MyTaskPage from '@/features/my-task/pages/MyTaskPage'
import TaskCategoriesPage from '@/features/task-categories/pages/TaskCategoriesPage'
import SettingPage from '@/features/settings/pages/SettingPage'
import HelpPage from '@/features/help/pages/HelpPage'

import Test from '@/features/test/pages/TestPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'vital-task',
        element: <VitalTaskPage />,
      },
      {
        path: 'my-task',
        element: <MyTaskPage />,
      },
      {
        path: 'task-categories',
        element: <TaskCategoriesPage />,
      },
      {
        path: 'settings',
        element: <SettingPage />,
      },
      {
        path: 'help',
        element: <HelpPage />,
      },
    ],
  },
  {
    path: '/test',
    element: <Test />,
  },
])

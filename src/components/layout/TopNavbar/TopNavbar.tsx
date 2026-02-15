import { useState } from 'react'
import { Bell, Menu as MenuIcon, X, LogOut, CalendarDays } from 'lucide-react'
import dayjs from 'dayjs'
import { CommonInput } from '@/components/common/Input'
import { SearchOutlined } from '@ant-design/icons'
import { items as menuItems } from '../Sidebar/Sidebar'
import { Menu, type MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

function TopNavbar() {
  const navigate = useNavigate()
  const today = dayjs()
  const dayName = today.format('dddd')
  const dateString = today.format('DD/MM/YYYY')

  const [val, setVal] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    console.log('Logging out...')
    setIsMenuOpen(false)
  }

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'logout') {
      handleLogout()
      return
    }
    navigate(`/${e.key}`)
    setIsMenuOpen(false)
  }

  const mobileMenuItems: MenuProps['items'] = [
    ...(menuItems || []),
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: <span className="text-red-500 font-medium">Logout</span>,
      icon: <LogOut size={20} className="text-red-500" />,
    },
  ]

  return (
    <div className="bg-[#F8F8F8] flex items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-12 lg:px-16 xl:px-[72px] sm:py-6 md:pt-[37px] md:pb-[24px] relative">
      <div className="flex items-center">
        <h1 className="text-xl font-bold sm:text-2xl md:text-[32px]">
          <span className="text-primary">Dash</span>
          <span className="text-gray-900">board</span>
        </h1>
      </div>

      <div className="relative hidden flex-1 max-w-md md:block">
        <CommonInput
          value={val}
          onChange={setVal}
          enterButton={{
            icon: <SearchOutlined />,
          }}
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-600">
          <Bell size={20} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-600">
          <CalendarDays size={20} />
        </button>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-600 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
        </button>

        <div className="hidden text-right  sm:block">
          <div className="text-[16px] font-semibold text-gray-900 md:text-base">
            {dayName}
          </div>
          <div className="text-[14px] text-[#3ABEFF] md:text-sm">
            {dateString}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 md:hidden border-t border-gray-100 flex flex-col pb-4">
          <Menu
            mode="inline"
            items={mobileMenuItems}
            onClick={handleMenuClick}
            className="border-none"
            selectedKeys={[]}
          />
        </div>
      )}
    </div>
  )
}

export { TopNavbar }

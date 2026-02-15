import React from 'react'
import { AntDesignOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

const AvatarGroup: React.FC = () => (
  <>
    <Avatar.Group
      size="large"
      shape="square"
      max={{
        count: 2,
        style: {
          color: '#f56a00',
          backgroundColor: '#fde3cf',
          border: '1px solid #fde3cf',
        },
      }}
    >
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Avatar
        style={{ backgroundColor: '#1677ff' }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
  </>
)

export default AvatarGroup

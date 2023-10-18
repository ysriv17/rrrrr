import React from 'react'
import './topnav.scss'
import UserInfo from '../user-info/UserInfo'
import { data } from '../../constants'

const TopNav = () => {
   

    return (
        <div className='topnav'>
      <UserInfo user={data.user} />
        </div>
    )
}

export default TopNav

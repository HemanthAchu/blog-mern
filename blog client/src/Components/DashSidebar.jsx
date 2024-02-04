import React, { useEffect, useState } from 'react'
import {Sidebar} from 'flowbite-react'
import {HiUser,HiArrowDownRight} from 'react-icons/hi2'
import { Link, useLocation } from 'react-router-dom'

export default function DashSidebar() {
    const location =useLocation()
    const [tab,settab] =useState('')
    useEffect(()=>{
      const urlParams =new URLSearchParams(location.search)
      const tabFromUrl =urlParams.get('tab')
      if(tabFromUrl){
        settab(tabFromUrl)
      }
  
    },[location.search])
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
       <Sidebar.ItemGroup>
        <Link to={'/dashboard?tab=profile'}>
        <Sidebar.Item active={tab ==='profile'} icon={HiUser} label={'user'} labelColor='dark'>
            profile
        </Sidebar.Item>
        </Link>
        <Sidebar.Item  icon={HiArrowDownRight}>
            SignOut
        </Sidebar.Item>
       </Sidebar.ItemGroup>
      </Sidebar.Items>
      
    </Sidebar>
  )
}

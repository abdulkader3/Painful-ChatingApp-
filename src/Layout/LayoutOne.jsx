import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const LayoutOne = () => {

    const correntUserdataFromRedex = useSelector((state)=> state.prity.UserLoginData)
    const navigate = useNavigate()

    useEffect(()=>{
        if( correntUserdataFromRedex == null ){
            navigate('/login')
        }
    },[])




  return (
    <>

    <Outlet/>
      
    </>
  )
}

export default LayoutOne

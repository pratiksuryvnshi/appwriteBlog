import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate('/')
        })
    }
    return (
        <button
            className='inline-block px-6 py-2 duration-200 text-gray-800 font-bold hover:text-gray-700 hover:bg-slate-200 rounded-full'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn
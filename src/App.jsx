import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from "./components"
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [setLoading])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap text-center content-between'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div className='w-full block'>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

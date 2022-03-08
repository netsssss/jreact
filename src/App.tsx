import { AuthenticatedApp } from 'authenticated-app'
import { useAuth } from 'context/auth-context'
import React from 'react'
import { UnauthenicatedApp } from 'unauthenticated-app'
import './App.css'

function App() {
    const { user } = useAuth()
    return <div className='App'>{user ? <AuthenticatedApp /> : <UnauthenicatedApp />}</div>
}

export default App

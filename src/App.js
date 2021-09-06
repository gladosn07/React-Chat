import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'

import ChatFeed from './Components/ChatFeed'
import LoginForm from './Components/LoginForm'

function App() {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height='100vh'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            projectID='799c546d-a45b-4cc5-8ec2-073f0a0e7e73'
            renderChatFeed={(chatAppProps)=> <ChatFeed { ...chatAppProps} />}
        />
    )
}

export default App

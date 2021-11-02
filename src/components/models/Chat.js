import React from 'react'
import styled from 'styled-components'
import ChatForm from './ChatForm'

function Chat() {
    return (
        <>
            <ChatButton>
                <img src="./images/chat.svg" alt="start chat" />
            </ChatButton>
            <ChatForm />
        </>
    )
}

export default Chat

const ChatButton = styled.button`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 75px;
    right: 35px;
    background: white;
    border-radius: 50%;
    padding: 13px;
    border: none;
    cursor: pointer;
    box-shadow: -3px -3px 2px rgba(0, 0, 0, .05),
                -3px 3px 2px rgba(0, 0, 0, .05),
                3px 3px 2px rgba(0, 0, 0, .05),
                3px -3px 2px rgba(0, 0, 0, .05);
`
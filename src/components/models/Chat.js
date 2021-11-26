import React from 'react'
import { useDispatch } from 'react-redux'
import { chatter } from '../../features/chat/toggleChatSlice'

import styled from 'styled-components'
import ChatForm from './ChatForm'

function Chat() {
    const dispatch = useDispatch();
    return (
        <>
            <ChatButton onClick={() => dispatch(chatter())}>
                <img src="./images/chat.svg" alt="start chat" />
            </ChatButton>
            <ChatForm />
        </>
    )
}

export default Chat

const ChatButton = styled.div`
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
    z-index: 10;
    box-shadow: -3px -3px 2px rgba(0, 0, 0, .05),
                -3px 3px 2px rgba(0, 0, 0, .05),
                3px 3px 2px rgba(0, 0, 0, .05),
                3px -3px 2px rgba(0, 0, 0, .05);
`
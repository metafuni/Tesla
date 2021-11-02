import React from 'react'
import styled from 'styled-components'

function ChatForm() {
    return (
        <ChatWindow>
            <ChatHeader>
                <ChatHead>
                    <img src="./images/tsla_logo.svg" alt="tesla logo" />
                    <h5>Chat</h5>
                </ChatHead>
                <CloseButton>
                    x
                </CloseButton>
            </ChatHeader>
            <ChatMain>
                <p>There are no agents currently available. Please enter your contact information and we will get back to you.</p>
                <FormContainer>
                    <label for="firstname">First Name *</label>
                    <input id="firstname" name="firstname" type="text" value="Enter your first name" required></input>
                    <label for="lastname">Last Name *</label>
                    <input id="lastname" name="lastname" type="text" value="Enter your last name" required></input>
                    <label for="email">Email *</label>
                    <input id="email" name="email" type="email" value="Enter your email address" required></input>
                    <label for="phonenumber">Phone *</label>
                    <input id="phonenumber" name="phonenumber" type="text" value="Enter your phone number" required></input>
                    <label for="zipcode">Zip Code *</label>
                    <input id="zipcode" name="zipcode" type="text" value="Enter your zip code" required></input>
                    <span>Product Interest *</span>
                    <label for="product">Model S</label>
                    <input id="product" name="product" type="checkbox" value="Model S" required></input>
                    <label for="product">Model 3</label>
                    <input id="product" name="product" type="checkbox" value="Model 3" required></input>
                    <label for="product">Model X</label>
                    <input id="product" name="product" type="checkbox" value="Model X" required></input>
                    <label for="product">Model Y</label>
                    <input id="product" name="product" type="checkbox" value="Model Y" required></input>
                    <label for="product">Solar Panels</label>
                    <input id="product" name="product" type="checkbox" value="Solar Panels" required></input>
                    <label for="product">Solar Roof</label>
                    <input id="product" name="product" type="checkbox" value="Solar Roof" required></input>
                </FormContainer>
            </ChatMain>
        </ChatWindow>
    )
}

export default ChatForm

const ChatWindow = styled.div`
    width: 310px;
    height: 615px;
    position: fixed;
    bottom: 75px;
    right: 25px;
    background: white;
    border-radius: .6rem;
    border: none;
    z-index: 11;
    box-shadow: -2px -2px 2px rgba(0, 0, 0, .05),
                -2px 2px 2px rgba(0, 0, 0, .05),
                2px 2px 2px rgba(0, 0, 0, .05),
                2px -2px 2px rgba(0, 0, 0, .05);
`
const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 8px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .1)
`

const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-weight: bold;
    font-size: 13px;
    padding: 5px;
    cursor: pointer;
`

const ChatHead = styled.div`
    display: flex;

    h5 {
        margin-left: 12px;
    }
`

const ChatMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-size: 14.5px;
    line-height: 19px;
    padding: 15px 0 0 15px;

    p {
        margin-bottom: 28px;
    }
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 75%;
    opacity: .9;
    padding: 0 15px;
    overflow-y: scroll;

    label {
        margin-bottom: 7px;
    }

    input {
        background: rgba(72, 72, 72, .1);
        border: none;
        border-radius: 25px;
        padding: 15px;
    }

    input:focus {
        outline: .5px solid rgba(72, 72, 72, .3);
    }
`
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBot = () => {
    const scroll = useRef()
    const [message, setMessages] = useState([])
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        )
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let message = [];
            QuerySnapshot.forEach((doc) => {
                message.push({...doc.data(), id: doc.id})
            })
            setMessages(message)
        })
        return () => unsubscribe
    },[])
    return (
        <main className="chat-box">
            <div className="messages-wrapper">
                {message ?.map((message) => {
                    <Message key={message.id} message={message}/>
                })}
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll}/>
        </main>
    )
}

export default ChatBot;
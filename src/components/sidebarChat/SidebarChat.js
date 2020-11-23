import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import { avatarUrl } from '../shared'

function SidebarChat({ addNewChat, createChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);


    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={avatarUrl + seed + 'svg'} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
        :
        (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add new Chat</h2>
            </div>
        )
}

export default SidebarChat;
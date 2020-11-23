import React, { useEffect, useState } from 'react'
import SidebarChat from './sidebarChat/SidebarChat';
import './ChatUi.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { avatarUrl } from './shared';

function ChatUi() {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat room");

        if (roomName) {

        }
    };

    const sendMessage = (e) => {
        e.preventDefault();

        console.log(input);

        setInput('');
    }

    return (
        <div className="app">
            <div className="app__body">

                <div className="sidebar">
                    <div className="sidebar__header">
                        <Avatar />
                        <div className="sidebar__headerRight">
                            <IconButton>
                                <DonutLargeIcon />
                            </IconButton>
                            <IconButton>
                                <ChatIcon />
                            </IconButton>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="sidebar__search">
                        <div className="sidebar__searchContainer">
                            <SearchOutlined />
                            <input placeholder="Search or start new Chat" type="text" />
                        </div>
                    </div>
                    <div className="sidebar__chats">
                        <SidebarChat addNewChat createChat={createChat} />
                        <SidebarChat />
                        <SidebarChat />
                        <SidebarChat />
                    </div>
                </div>

                <div className="chat">
                    <div className="chat__header">
                        <Avatar src={avatarUrl + seed + 'svg'} />

                        <div className="chat__headerInfo">
                            <h3>Room name</h3>
                            <p>Last seen at ...</p>
                        </div>

                        <div className="chat__headerRight">
                            <IconButton>
                                <SearchOutlined />
                            </IconButton>
                            <IconButton>
                                <AttachFile />
                            </IconButton>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                    </div>

                    <div className="chat__body">
                        <p className={`chat__message ${true && "chat__receiver"}`}>
                            <span className="chat__name">Joseph</span>
                            Hey guys
                            <span className="chat__timestamp">1:07am</span>
                        </p>
                        <p className="chat__message">Hey guys</p>
                    </div>

                    <div className="chat__footer">
                        <InsertEmoticonIcon />
                        <form>
                            <input onChange={e => setInput(e.target.value)} value={input} type="text" placeholder="Type a message" />
                            <button onClick={sendMessage} type="submit">Send a message</button>
                        </form>
                        <MicIcon />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ChatUi;
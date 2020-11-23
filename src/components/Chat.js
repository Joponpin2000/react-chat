import React, { useEffect, useState } from 'react';
import './ChatUi.css';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';
import { ENDPOINT } from './shared';

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [usersInRoom, setUsersInRoom] = useState([]);

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        socket.emit('join', { name, room }, () => {

        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    useEffect(() => {
        socket.on('roomData', ({ users }) => {
            setUsersInRoom([
                [...users],
                users
            ]);
        })

    }, [usersInRoom]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (

        <div className="app">
            <div className="app__body">

                <div className="chat">
                    <div className="b">
                        <InfoBar room={room} seed={seed} />
                        <Messages messages={messages} name={name} />
                    </div>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    )
}

export default Chat;
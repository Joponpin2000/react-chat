import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const Messages = ({ messages, name }) => (
    <ScrollToBottom>
        {messages.map(({ user, text }, i) => <div key={i}><Message message={text} sender={user} name={name} /></div>)}
    </ScrollToBottom>
);

export default Messages;
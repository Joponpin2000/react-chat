import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message, sender, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (sender === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (

        <div className="chat__body">
            <p className={`chat__message ${isSentByCurrentUser && "chat__receiver"}`}>
                <span className="chat__name">{sender}</span>
                {ReactEmoji.emojify(message)}
            </p>
        </div>

    )
}

export default Message;
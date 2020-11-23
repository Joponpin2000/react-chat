import React from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const Input = ({ message, setMessage, sendMessage }) => (

    <div className="chat__footer fixed-bottom">
        <InsertEmoticonIcon />
        <form>
            <input onChange={e => setMessage(e.target.value)} value={message} type="text" placeholder="Type a message" />
            <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
    </div>
);

export default Input;
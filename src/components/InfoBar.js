import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import { avatarUrl } from './shared';
import Delete from '@material-ui/icons/Delete';

const InfoBar = ({ room, users, seed }) => {

    return (

        <div className="chat__header">
            <Avatar src={avatarUrl + seed + 'svg'} />

            <div className="chat__headerInfo">
                <h3>{room}</h3>
                <p>Last seen at ...</p>
            </div>

            <div className="chat__headerRight">
                <IconButton>
                    <Delete />
                </IconButton>

            </div>
        </div>
    )
};

export default InfoBar;
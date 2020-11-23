import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const groups = [
    { name: 'Dance' },
    { name: 'Education' },
    { name: 'Jobs' },
    { name: 'Sports' },
    { name: 'Gists' }
];

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="mx-auto col-md-6">
            <div className="form-panel input-group">
                <input name="name" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Username" type="text" />
            </div>
            <div className="form-panel input-group">
                <select className="custom-select mr-sm-2" name="room" onChange={(e) => setRoom(e.target.value)} >
                    <option value="">Choose a group...</option>
                    {groups.map((group, i) => (
                        <option key={i} value={group.name}>{group.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <Link onClick={evt => (!name || !room) ? evt.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="btn btn-primary btn-block" type="submit">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Join;
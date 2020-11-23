import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Display from './Display';

export default function TextContainer({ users }) {
    return (
        <ScrollToBottom>
            {
                users && users !== undefined
                    ?
                    (
                        users[0].map((user, i) => (
                            <Display user={user} key={i} />
                        )
                        )
                    )
                    : (
                        <div></div>
                    )
            }
        </ScrollToBottom>
    )
}

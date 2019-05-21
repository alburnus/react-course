import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>User name: {props.userName}</p>
            <p>I hope this will be random text</p>
        </div>
    )
}

export default userOutput;
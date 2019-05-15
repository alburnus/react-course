import React from 'react';

// ES6 syntax

const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            {/*props.children itt is element which in parent is between <Person></Person> element*/}
            <p>{props.children}</p>
        </div>
    )
};

export default person;
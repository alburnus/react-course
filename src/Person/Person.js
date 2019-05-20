import React from 'react';
import './Person.css';
// ES6 syntax

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            {/*props.children itt is element which in parent is between <Person></Person> element*/}
            <p>{props.children}</p>
            {/*Two-way binding -> to value assigne value from name and onChange we set new value
             Good to know: delete onChange make impossible to edit value in form*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
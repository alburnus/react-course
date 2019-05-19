import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [ personsState, setPersonsState ] = useState({
        persons: [
            {name: 'Adam', age: '31'},
            {name: 'Ewa', age: '30'}
        ]
    });

    const switchNameHandler = () => {
        setPersonsState({
                persons: [
                    {name: 'Adam', age: '32'},
                    {name: 'Ewa', age: '31'}
                ]
            }
        )
    }

    return (
        <div className="App">
            <h1>Hello</h1>
            {/*switchNameHandler is without (), because with () this.switchNameHandler() it will execute immediately*/}
            {/*Without () is a reference*/}
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My hobby is sth.</Person>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
        </div>
    );

}

export default App;
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Adam', age: '31'},
            {name: 'Ewa', age: '30'}
        ]
    }

    // It is an event handler. Good practice: give name ending handler
    switchNameHandler = () => {
        console.log('Was clicked');

    }

    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                {/*switchNameHandler is without (), because with () this.switchNameHandler() it will execute immediately*/}
                {/*Without () is a reference*/}
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My hobby is sth.</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
            </div>
        );
    }
}

export default App;

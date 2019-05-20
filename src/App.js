import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Adam', age: '31'},
            {name: 'Celina', age: '32'},
            {name: 'Ewa', age: '30'}
        ]
    }

    // It is an event handler. Good practice: give name ending handler
    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: '31'},
                {name: 'Celina', age: '33'},
                {name: 'Ewa', age: '30'}
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Adam', age: '31'},
                {name: event.target.value, age: '35'},
                {name: 'Ewa', age: '30'}
            ]
        })
    }

    render() {
        // style JavaScript way
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        return (
            <div className="App">
                <h1>Hello</h1>
                {/*switchNameHandler is without (), because with () this.switchNameHandler() it will execute immediately*/}
                {/*Without () is a reference*/}
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'Piotr')}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
//                     () => include return this.switchNameHandler('Peter!')
//                     so we can change to () => {return this.switchNameHandler('Peter!')}
//                     () => is no efficient so use bind version instead
                    click={() => {return this.switchNameHandler('Peter!')}}> My hobby is racing.
                </Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    // pass method reference as props
                    click={this.switchNameHandler.bind(this, 'Peter')}
                    changed={this.nameChangeHandler}
                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
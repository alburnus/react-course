import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Adam', age: '31'},
            {id: '2', name: 'Celina', age: '32'},
            {id: '3', name: 'Ewa', age: '30'}
        ],
        showPersons: false
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
           return p.id === id;
        });

        const person = {
            // ES6 feature ...this.state -> create copy
            ...this.state.persons[personIndex]
        }
        // It's alternative to ...this.state.persons
        const personAlternative = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        const persons = [...this.state.persons]; // create copy so we do not work on old object
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    }

    deletePersonHandler = (personIndex) => {
        // slice create new copy of object
        //const persons = this.state.persons.slice();

        // ES6 feature to create new copy
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        // this merge changes in state
        this.setState({showPersons: !doesShow})
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

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person click={() => this.deletePersonHandler(index)}
                                       name={person.name}
                                       age={person.age}
                                       key={person.id}
                                       changed={(event) => this.nameChangeHandler(event, person.id)}
                        />
                    })}
                    {/*<Person*/}
                    {/*name={this.state.persons[0].name}*/}
                    {/*age={this.state.persons[0].age}*/}
                    {/*//                     () => include return this.switchNameHandler('Peter!')*/}
                    {/*//                     so we can change to () => {return this.switchNameHandler('Peter!')}*/}
                    {/*//                     () => is no efficient so use bind version instead*/}
                    {/*click={() => {*/}
                    {/*return this.switchNameHandler('Peter!')*/}
                    {/*}}> My hobby is racing.*/}
                    {/*</Person>*/}
                    {/*<Person*/}
                    {/*name={this.state.persons[1].name}*/}
                    {/*age={this.state.persons[1].age}*/}
                    {/*// pass method reference as props*/}
                    {/*click={this.switchNameHandler.bind(this, 'Peter')}*/}
                    {/*changed={this.nameChangeHandler}*/}
                    {/*/>*/}
                    {/*<Person*/}
                    {/*name={this.state.persons[2].name}*/}
                    {/*age={this.state.persons[2].age}/>*/}
                </div>
            )
        }

        return (
            <div className="App">
                <h1>Hello</h1>
                {/*switchNameHandler is without (), because with () this.switchNameHandler() it will execute immediately*/}
                {/*Without () is a reference*/}
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
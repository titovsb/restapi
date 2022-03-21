import React from 'react';
//import logo from './logo.svg';
import './App.css';
import AuthorsList from './components/Author.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'authors': []
        }
    }

    componentDidMount() {
        const authors = [
            {
                'first_name': 'Федор',
                'last_name': 'Достоевский',
                'birthdate_year': 1821
            },
            {
                'first_name': 'Александр',
                'last_name': 'Грин',
                'birthdate_year': 1880
            },
            {
                'first_name': 'Антон',
                'last_name': 'Чехов',
                'birthdate_year': 1860
            },
        ]
        this.setState(
            {
                'authors': authors
            }
        )
    }

    render () {
        return (
            <div>
                <AuthorsList authors={this.state.authors} />
            </div>
        )
    }
}

export default App;

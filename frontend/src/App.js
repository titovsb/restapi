import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './css/css.css';     // делаем табличку с рамочками
import ActorList from './components/Actor.js';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'actors': []
        }
    }

//    componentDidMount() {
//        const authors = [
//            {
//                'name': 'Федор',
//                'surname': 'Достоевский',
//                'email': 'email@mail.com',
//                'birthday': 1821
//            },
//            {
//                'name': 'Александр',
//                'surname': 'Грин',
//                'email': 'email@mail.com',
//                'birthday': 1880
//            },
//            {
//                'name': 'Антон',
//                'surname': 'Чехов',
//                'email': 'email@mail.com',
//                'birthday': 1860
//            },
//        ]
//        this.setState(
//            {
//                'authors': authors
//            }
//        )
//    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/actors/?format=json')
            .then(response => {
                const actors = response.data
                this.setState(
                    {
                        'actors': actors
                    }
                )
            }).catch(error => console.log(error))
    }

    render () {
        return (
            <div>
                <ActorList actors={this.state.actors} />
            </div>
        )
    }
}

export default App;

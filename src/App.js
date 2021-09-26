import React, {Component} from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
		var today = new Date(),

		date = new Date().getDate() + '/' + (today.getMonth() + 1).toString().padStart(2, "0") + '/' + today.getFullYear() + ' '  + today.getHours().toString().padStart(2, "0") + ':' + today.getMinutes().toString().padStart(2, "0");
        this.state = {myCurrentTime : date};
    }

    componentDidMount() {
        const url = 'http://localhost:8080/api/name';
        axios.get(url).then(response => {
            console.log('response : ');
            console.log(response);
            this.setState({message: response.data});
        }).catch(error => {
            console.log('error : ');
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App">
                 { this.state.myCurrentTime + ' ' + this.state.message}
            </div>
        );
    }
}

export default App;
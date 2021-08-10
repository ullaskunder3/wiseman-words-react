import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{
    state ={
        wiseWords: ''
    };
    componentDidMount(){
        this.fetchAdvice();
    }
    fetchAdvice = ()=> {
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {advice} = response.data.slip;
            this.setState({wiseWords: advice})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){

        // destructuring
        const {wiseWords} = this.state;

        return (
            // <h1>{wiseWords}</h1>
            <div className="app">
            <div className="bg"></div>
                <div className="card">
                    <div className="left__container">
                    <h1 className="heading">{wiseWords}</h1>
                    </div>
                    <div className="right__container"></div>
                </div>
            </div>
        );
    }
}
// https://api.adviceslip.com/advice

export default App;
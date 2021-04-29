import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header2'


import RouteApp from './routerapp';
class App extends React.Component{

    constructor(props){
        super();
        this.state={
            password:"",
            email:"",
            logo:logo
        }
    }


    setInputValue=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }



    render(){
        return <div className="container">
          <RouteApp />
        </div>
    }
}


export default App;
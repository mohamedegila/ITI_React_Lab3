import React from "react";
import logo from './logo.svg';
import Todo from './todo';
import Login from './login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {Header,Menu} from './Header2'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            items:[
            {
                text:"Home",
                link:"/home"
            },
            {
                text:"Login",
                link:"/login"
            },
            {
                text:"Users",
                link:"/users"
            },
            {
                text:"todo",
                link:"/todo"
            }
        ]
    }
    }

    toggleActive=(text)=>{
        
        this.state.items.forEach((item)=>item.active=false);
        let item = this.state.items.find(x=>x.text==text);
        item.active = !item.active
        this.setState({items:this.state.items});
        
    }


    render(){
        return <Router class>
            <Header title="My website" logo={logo} menu={this.state.items} toggleActive={this.toggleActive} />
        
            <Switch>
                <Route path="/users" >
                    <UserList />
                </Route>
                <Route path="/login" >
                    <Login />
                </Route>
                <Route path="/todo">
                    <Todo />
                </Route>
                <Route path="/" >
                    <Home />
                </Route>
            </Switch>
        </Router>
    }
}


class Home extends React.Component{
    render(){
        return <div>Home</div>;
    }
}

class About extends React.Component{
    render(){
        return <div>About</div>;
    }
}

class Contacts extends React.Component{
    render(){
        return <div>Contacts</div>;
    }
}

class Projects extends React.Component{
    render(){
        return <div>Projects</div>;
    }
}


class UserList extends React.Component{

    constructor(){
        super();
        this.state={
            users:[],
            loading:false
        };
    }

    async componentDidMount(){
        this.setState({loading:true});
        setTimeout(async ()=>{

        
        let res= await fetch("https://reqres.in/api/users?page=2",{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        });
        let resJson = await res.json();
        this.setState({users:resJson.data,loading: false});
    },5000)
    }

    render(){
        return <div>
            {!this.state.loading ? this.state.users.map((item)=>{
                return <UserView key={item.id}  user={item} />
            }): "Loading Users"}
        </div>
    }
}



class UserView extends React.Component{
    constructor(){
        super();
        
    }

    render(){
        return<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
    <img src={this.props.user.avatar} style={{width:100,height:100}} />
    </div>
    <div className="col-md-8">
      <div className="card-body">

        <p className="card-text">{this.props.user.first_name} {this.props.user.last_name}</p>
        <p className="card-text"><small className="text-muted">Email</small>{this.props.user.email}</p>
      </div>
    </div>
  </div>
</div>

        
    }
}


export default App;
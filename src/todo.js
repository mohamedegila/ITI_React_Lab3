
import React from 'react';

class Todo extends React.Component{

    constructor(){
        super();
        this.state={
            tasks:[]
        }
    }

    componentDidMount(){
        if(localStorage["tasks"]){
        let tasks = JSON.parse(localStorage["tasks"])
        
        this.setState({tasks:tasks})
        }
    }

    addTask=(task)=>{
        if(task.task){
          this.state.tasks.push(task);
        this.setState({tasks:this.state.tasks});
        this.saveToLocalStorage();

        }
            }

    saveToLocalStorage=()=>{
        localStorage["tasks"] = JSON.stringify(this.state.tasks);
    }

    render(){
        return <div>
            <div className="container mt-5 border">
              <div className="m-3">
              <h1 className="text-center">To Do-List</h1>
           
            
                 <DisplayTasks tasks={this.state.tasks} />
                
              
              <div className="ml-5">
              <AddTask addTask={this.addTask} />
              </div>
              </div>
            </div>
        </div>
    }

}


class AddTask extends React.Component{

    constructor(props){
        super();
        this.state={
            task:"",
            error:""
        }
    }

    addTask=()=>{
        let task = {
            task:this.state.task
        }

        this.props.addTask(task);
    }
    render(){
        return <div>
            {this.state.error}<br/>
            Task <input className="ml-2" type="text" placeholder="Task name" value={this.state.task} onChange={(e)=>this.setState({task:e.target.value})} />
           
            <button className="btn btn-outline-info bt-sm ml-2" onClick={this.addTask} >Add</button>
        </div>
    }
}


class DisplayTasks extends React.Component{
    render(){
        return <div className="m-2">
            {this.props.tasks.length > 0 ?this.props.tasks.map((item)=>{
                return <DisplayTask task={item} key={item.task} />
            }):"Empty"}
        </div>
    }
}

DisplayTasks.defaultProps={
    tasks:[]
}

class DisplayTask extends React.Component{
    render(){
        return<div className="card">
<ul className="list-group list-group-flush">
   <li className="list-group-item">
   {this.props.task.task} 
   </li>
</ul>
</div>
    }
}


export default Todo;
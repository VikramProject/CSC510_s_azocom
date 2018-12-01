import React, { Component } from 'react';
import FormData from "./components/FormData";
import './App.css';
import Ticket from "./components/Ticket";

class App extends Component {
  state={
    data:[],
    newData:{
      name:"",
      age:"",
      country:"",
      gender:"",
    }
  }
   onChangeHandler = (event,id) =>
    {
      //console.log(id);
      let newData={...this.state.newData};
      newData[id]=event.target.value;
      this.setState({
        newData:newData
      });
    }
     submitHandler=(event) => {
       event.preventDefault();
      //console.log(this.state.newData);
      let data=[...this.state.data];
      let newData={...this.state.newData}
      data.push(newData);
      //console.log(data);
      this.setState({
        data:data,
      });
    }
  render() {
    //console.log(this.state.data);
    const tickets=this.state.data.map((value,index) => {
      return <Ticket
        key={index}
        id={index}
        name={value.name}
        age={value.age}
      />
    })
    return (
     <div className='container'>
      <div className='page-header'>
      <h1>React Stress test</h1>
      </div>
        <FormData 
        data={this.state.newData}
        changed={(event,id) => {this.onChangeHandler(event,id)}}
        submit={this.submitHandler}
        />
        <h1>Hello, <span>{this.state.newData.name}</span></h1> 
        {tickets}
     </div>
    );
  }
}

export default App;

import React from "react";

const Ticket = (props) => {
    const style={
        display: 'inline-block',
        alignContent: 'center', 
        width: '300px',
        height: '120px',
        borderStyle: 'dotted dashed solid double',
        padding: '10px',
        margin:'10px',
      }
    return (
    <div style={style}>
        <h3>TICKET:&nbsp; {props.id}</h3>
        <h5>Name:&nbsp; {props.name}</h5>
        <h5>Age:&nbsp; {props.age}</h5>
        
    </div>
    );
}

export default Ticket;
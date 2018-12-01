import React from "react";

const FormData = (props) => {
    return (
        <form onSubmit={props.submit}>
            <div  className="form-group">
                <label htmlFor="forname">Name</label>
                <input className="form-control" id="forname" value={props.data.name} onChange={(event) => {props.changed(event,"name")}}/>
                <label htmlFor="forage">Age</label>
                <input className="form-control" id="forage" value={props.data.age} onChange={(event) => {props.changed(event,"age")}}/>
                <label htmlFor="forcountry">Country</label>
                <input className="form-control" id="forcountry" value={props.data.country} onChange={(event) => {props.changed(event,"country")}}/>
                <label htmlFor="forgender">Gender</label>
                <select className="form-control" id="forgender" value={props.data.gender} onChange={(event) => {props.changed(event,"gender")}}>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="N">None of the above</option>
                </select>
                <button type="submit" >Create Ticket</button>
            </div>

        </form>
    );
}

export default FormData;
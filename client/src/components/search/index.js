import React from "react";
import "./style.css";

export function Input(props){
    return(
        <div className="form-group">
            <label htmlFor="exampleBookSearch">Book</label>
            <input className="form-control" id="exampleBookSearch" aria-describedby="bookHelp" placeholder="Enter Book" {...props}/>
        </div>
    );
}

export function FormBtn(props){
    return(
        <button type="button" {...props} className="btn btn-success">
            Search
        </button>
    )
}

// export default search;
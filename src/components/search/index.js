import React from "react";
import "./style.css";

function search(props){
    return(
        <form>
            <h2 className="jumbotronTitle">Book Search</h2>
            <div className="form-group">
                <label htmlFor="exampleBookSearch">Book</label>
                <input type="book" className="form-control" id="exmapleBookSearch" aria-describedby="bookHelp" placeholder="Enter Book" {...props}/>
            </div>
            <button type="button" onClick={props.getSearchQuery} className="btn btn-primary" >Search</button>
        </form>
    )
}

export default search;
import React from "react";
import "./style.css";

function search(){
    return(
        <form>
            <h2 className="jumbotronTitle">Book Search</h2>
            <div className="form-group">
                <label for="exampleBookSearch">Book</label>
                <input type="book" className="form-control" id="exmapleBookSearch" aria-describedby="bookHelp" placeholder="Enter Book"/>
            </div>
            <button type="submit" class="btn btn-primary">Search</button>
        </form>
    )
}

export default search;
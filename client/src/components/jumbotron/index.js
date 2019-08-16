import React from "react";
import "./style.css";

function jumbotron(){
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">(React) Google Books</h1>
                <p className="lead">Search for and Save Books of Interest</p>
            </div>
        </div>
    )
}
export default jumbotron;
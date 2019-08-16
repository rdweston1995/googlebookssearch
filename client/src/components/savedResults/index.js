import React from "react";
import "./style.css";

function results(props){
    return(
        <div className="savedDiv">
            <h3 className="title">{props.title}</h3>
            <h4 className="subtitle">{props.subtitle}</h4>
            <h5 className="authors">{props.authors}</h5>
            <div className="row">
                <div className="col-1">
                    <img alt={props.title} className="image" src={props.image}/>
                </div>
                <div className="col-11">
                    <p className="description">{props.description}</p>
                </div>
            </div>
            <button className="btn btn-success gplayLink" href={props.infoLink}>Google Play Preview</button>
        </div>

    )
}

export default results;
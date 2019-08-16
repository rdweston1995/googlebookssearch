import React from "react";
import "./style.css";

function results(props) {
    // console.log(props);
    return (
        <div className="resultsDiv">
            <h3 className="title">{props.title}</h3>
            <h4 className="subtitle">{props.subtitle}</h4>
            {props.authors.map(author => {
                return (
                    <h5 className="authors">{author}</h5>
                )
            })}
            <div className="row">
                <div className="col-1">
                <img alt={props.title} className="image" src={props.image} />
    
                </div>
                <div className="col-11">
                    <p className="description">{props.description}</p>
                </div>
            </div>
               
            <button className="btn btn-success gplayLink" href={props.infoLink}>Google Play Preview</button>
            <button className="btn btn-failure saved" onClick={() => props.onClick(props)}>Save</button>
        </div>
        );
    
}

export default results;
import React from "react";
import "./style.css";

export function Input(props) {
    return (
        <div className="row">
            <div className="col"></div>
            <div className="col-6 searchBar form-group">
                
                <input className="form-control" id="exampleBookSearch" aria-describedby="bookHelp" placeholder="Enter Book" {...props} />
            </div>
            <div className="col"></div>
        </div>


    );
}

export function FormBtn(props) {
    return (
        <div className="row">
            <div className="col"></div>
            <div className="col-6">
                <button type="button" {...props} className="searchBtn btn btn-success">
                    Search
                </button>
            </div>
            <div className="col"></div>
        </div>

    )
}

// export default search;
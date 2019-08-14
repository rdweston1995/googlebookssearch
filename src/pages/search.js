import React, {Component} from "react";
import Results from "./../components/results";
import Search from "./../components/search";
import API from "./../utils/API";
// import { Link } from "react-router-dom";

class SearchPage extends Component {
    state = {
        books: [],
        title: ""
    };

    handleInputChange = event => {
        const{name, value} = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.title);
    }
    getSearchQuery = event => {
        // event.preventDefault();
        API.getBooks().then(res => console.log(res)).catch(err => console.log(err));
        // console.log(this.state);
    }

    render() {
        return (
            <div>
                <Search
                    onChange={this.handleInputChange}
                    name="title"
                    onClick={this.getSearchQuery}
                />
                <Results />
            </div>
        )
    }
}

export default SearchPage;
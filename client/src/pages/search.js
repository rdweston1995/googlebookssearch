import React, { Component } from "react";
import Results from "./../components/results";
import { Input, FormBtn } from "./../components/search";
import API from "./../utils/API";
import "./search.css";
// import { Link } from "react-router-dom";

class SearchPage extends Component {
    state = {
        books: [],
        title: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        // console.log(this.state.title);
    }

    logResData = res => {
        for (let i = 0; i < res.data.items.length; i++) {
            // console.log(res.data.items[i].volumeInfo);
            this.state.books.push(res.data.items[i].volumeInfo);
        }
        // console.log("BOOKS");
        // console.log(this.state.books);
        // console.log("END OF BOOKS");
    }

    saveBook = event => {
        // API.saveBook(props).then(res => console.log(res)).catch(err => console.log(err));
        // console.log("test");
        console.log(event);
        const newObj = {
            title: event.title,
            subtitle: event.subtitle,
            authors: event.authors[0],
            description: event.description,
            image: event.image,
            infoLink: event.infoLink,
        }

        console.log(newObj);
        // API.saveBook(event).then(res => console.log(res)).catch(err => console.log(err));
        API.saveBook(newObj).then(res => console.log(res)).catch(err => console.log(err));
    }

    getSearchQuery = event => {
        // event.preventDefault();
        event.preventDefault();
        // API.getBooks().then(res => this.setState({books: res.data})).catch(err => console.log(err));
        // API.getBooks().then(res => console.log(res.data.items)).catch(err => console.log(err));
        // API.getBooks().then(res =>  for(let i = 0; i < res.data.items.length; i++){console.log(res.data.items[i].volumeInfo);}).catch(console.log(err));
        // API.getBooks().then(res => this.logResData(res)).catch(err => console.log(err));
        // API.getBooks().then(res => this.setState({books: res.data})).catch(err => console.log(err));
        // API.getBooks().then(res => console.log(res.data.items)).catch(err => console.log(err));
        API.getBooks(this.state.title).then(res => this.setState({ books: res.data.items })).catch(err => console.log(err));
        // console.log(this.state.books);
        // console.log(this.state.books);
        // console.log(this.state);
    }




    //Change all the search functions into individual components
    render() {
        return (
            <div className="row test">
                <div className="col test"></div>
                <div className="col-8">
                    <div className="searchResultsContainer">
                        {/* <Search
                    onChange={this.handleInputChange}
                    name="title"
                    onClick={this.getSearchQuery}
                /> */}
                        <form>
                            <h2 className="jumbotronTitle">Book Search</h2>
                            <Input
                                onChange={this.handleInputChange}
                                name="title"
                            />
                            <FormBtn
                                onClick={this.getSearchQuery}
                            />
                        </form>
                        <h2 className="resultsTitle">Results</h2>
                        {!this.state.books.length ? (
                            <h1 className="noBooks text-center">No Books to Display</h1>
                        ) : (
                                <div className="resultsContainer col-12">
                                    {this.state.books.map(book => {
                                        // console.log(book.title);
                                        return (
                                            <Results
                                                key={book.title}
                                                title={book.volumeInfo.title}
                                                subtitle={book.volumeInfo.subtitle}
                                                authors={book.volumeInfo.authors}
                                                description={book.volumeInfo.description}
                                                image={book.volumeInfo.imageLinks.thumbnail}
                                                infoLink={book.volumeInfo.infoLink}
                                                onClick={this.saveBook}
                                            />
                                        );
                                    })}
                                </div>

                            )}

                    </div>
                </div>
                <div className="col"></div>
            </div>

        )
    }
}

export default SearchPage;
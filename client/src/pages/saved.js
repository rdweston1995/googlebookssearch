import React, { Component } from "react";
import API from "./../utils/API";
import Results from "./../components/savedResults";


class saved extends Component{
    state ={ 
        books: [],
    }
    componentDidMount(){
        this.loadBooks();
    }
    loadBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({books: res.data}))
            .catch(err => console.log(err));
    }
    render(){
        return(
            <div>
                {this.state.books.length ? (
                    // <h2>No Books to display</h2>
                    <div className="savedContainer col-12">
                        {this.state.books.map(book => {
                            return (
                                <Results
                                    key={book.title}
                                    title={book.title}
                                    subtitle={book.subtitle}
                                    authors={book.author}
                                    description={book.description}
                                    image={book.image}
                                    infoLink={book.infoLink}
                                />
                            )
                        })}
                    </div>
                ) : (<h2>No Books to display</h2>)}
            </div>
        )
    }
}

export default saved;
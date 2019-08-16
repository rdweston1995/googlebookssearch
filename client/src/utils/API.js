import Axios from "axios";
import keys from "../keys";

export default {
    getBooks: function(query){

        //Need to change the API call to go by the query
        // console.log("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" + keys.google);
        // console.log("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA4xCXz7uVrKx1QisuTCDqLPf1q4bTiuR4");
        // console.log(keys.google);
        // return Axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" + keys.google.key);
        // return Axios.get("https://www.googleapis.com/books/v1/volumes?q=Harry Potter&key=AIzaSyA4xCXz7uVrKx1QisuTCDqLPf1q4bTiuR4");
        return Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyA4xCXz7uVrKx1QisuTCDqLPf1q4bTiuR4");
    },
    getSavedBooks: function(){
        return Axios.get("/api/books");
    },

    saveBook: function(bookData) {
        return Axios.post("/api/books", bookData);
    }
}
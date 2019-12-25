import * as React from 'react';
import AuthorDetailsView from "./AuthorDetailsView";
import {Authors, AuthorsModel} from "../models/AuthorsModel";
import {Books} from "../models/BooksModel";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



let books1 = new Books(['PHP7', 'PHP5 V2', 'PHP5']);
let author1 = new Authors('Дмитрий', 'Котеров', '1982', books1);

let books2 = new Books(['Фокусы 3', 'Фокусы 2', 'Фокусы 1']);
let author2 = new Authors('Ахалай', 'Махалай', '1970', books2);

let books3 = new Books(['Чистый код', 'Идеальная Архитектура', 'Идеальный программист']);
let author3 = new Authors('Роберт', 'Мартин', '1952', books3);

let authorsList = [];
authorsList.push(author1);
authorsList.push(author2);
authorsList.push(author3);


class AuthorsListView extends React.Component<AuthorsModel> {

    constructor(props) {
        super(props);
        // this.authors = this.parsedAuthorsList.bind(this);
    }

    parsedAuthorsList() {
        let authors = [];
        authorsList.forEach((author, index, array) => {
            authors.push(
                <li key={index} className="list-group-item d-flex align-items-center">
                    <div className="badge badge-primary badge-pill mr-4">{author.yearOfBirth}</div>
                    <div className="d-flex w-100 justify-content-between">
                        <Link to="/AuthorData">{author.firstName + ' ' + author.lastName}</Link>
                        <small>книг - {author.books.books.length}</small>
                    </div>
                </li>
            );
        });

        return authors;
    };


    render() {
        return (

            <div>
                <div className="card" style={{'minWidth': '25rem'}}>
                    <Router>
                        <ul className="list-group list-group-flush">
                            {this.parsedAuthorsList()}
                            <Route path="/AuthorData" component={AuthorDetailsView} />
                        </ul>
                    </Router>
                </div>
            </div>
        );
    }
}

export default AuthorsListView;

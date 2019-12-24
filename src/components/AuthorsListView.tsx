import * as React from 'react';
import AuthorDetailsView from "./AuthorDetailsView";
import {Authors} from "../models/AuthorsModel";
import {Books} from "../models/BooksModel";

interface IProps {

}

let books1 = new Books([ 'PHP7', 'PHP5 V2', 'PHP5' ]);
let author1 = new Authors('Дмитрий','Котеров','1982', books1);

let books2 = new Books([ 'Фокусы 3', 'Фокусы 2', 'Фокусы 1' ]);
let author2 = new Authors('Ахалай','Махалай','1970', books2);

let authorsList = [];
authorsList.push(author1);
authorsList.push(author2);

console.log(authorsList);

let parsedAuthorsList = () => {
    authorsList.forEach((element, index, array) => {
        console.log(element.firstName + ' ' + element.lastName);
    });
};

parsedAuthorsList();

class AuthorsListView extends React.Component<IProps> {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                            content.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorsListView;

import {AuthorsModel} from "./AuthorsModel";

export interface BooksModel {
    books: object;
    // authors: AuthorsModel;
}

export class Books implements BooksModel {

    books;
    authors;

    constructor(
        books,
        // author: AuthorsModel
    ) {
        this.books = books;
        // this.authors = author;
    }


}
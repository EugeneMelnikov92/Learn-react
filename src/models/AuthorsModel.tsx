import {Books, BooksModel} from "./BooksModel";

export interface AuthorsModel {
    firstName: string;
    lastName: string;
    yearOfBirth: string;
    books: object;
}

export class Authors implements AuthorsModel {

    firstName;
    lastName;
    yearOfBirth;
    books;

    constructor(
        firstName: string,
        lastName: string,
        yearOfBirth: string,
        books: BooksModel) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.yearOfBirth = yearOfBirth,
            this.books = books;
    }

    public getAuthorBook(books: BooksModel) {
        // TODO: implement functionality for getting books list
    }

}
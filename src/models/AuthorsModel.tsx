import {Books} from "./BooksModel";

interface AuthorsModel {
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
        firstName:string,
        lastName:string,
        yearOfBirth:string,
        books:Books) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.yearOfBirth = yearOfBirth,
        this.books = books;
    }



}
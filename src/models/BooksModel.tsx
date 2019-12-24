interface BooksModel {
    books: object;
}

export class Books implements BooksModel {

    books;

    constructor(books) {
        this.books = books;
    }


}
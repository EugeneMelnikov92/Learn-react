import * as React from 'react';
import BookDetailsView from "./BookDetailsView";

class AuthorDetailsView extends React.Component {
    render() {
        return (
            <div>
                <h3>This is Book Details View!</h3>
                <BookDetailsView></BookDetailsView>
            </div>
        );
    }
}

export default AuthorDetailsView;

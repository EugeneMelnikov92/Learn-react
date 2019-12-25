import * as React from 'react';
import BookDetailsView from "./BookDetailsView";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class AuthorDetailsView extends React.Component {
    render() {
        return (
            <div>
                <h3>This is Book Details View!</h3>
                <Router>
                    <Link to="/BookData">BookData</Link>
                    <Route path="/BookData" component={BookDetailsView} />
                </Router>
                <></>
            </div>
        );
    }
}

export default AuthorDetailsView;

import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AuthorsListView from "./components/AuthorsListView";
import AuthorDetailsView from "./components/AuthorDetailsView";
import BookDetailsView from "./components/BookDetailsView";
import styled from 'styled-components';

var Center = styled.div`
text-align: center;
background-color: #282c34;
`

var Header = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
`



class App extends React.Component {
  render() {
    return (
      <Center>
        <Header>
            <Router>
                <div>
                    <Route exact path="/" component={AuthorsListView} />
                </div>
            </Router>
          <></>
        </Header>
      </Center>
    );
  }
}

export default App;

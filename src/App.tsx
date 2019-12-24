import * as React from 'react';
import AuthorsListView from "./components/AuthorsListView";

import styled, {keyframes} from 'styled-components';

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
          <AuthorsListView></AuthorsListView>
        </Header>
      </Center>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import Header from './Pages/Header/Header.jsx';
import Main from './Pages/Main/Main';
import GameDeets from './Pages/GameDeets/GameDeets';
import Header from './Components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <Header />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/games/:gameID" component={GameDeets} />
            </Switch>

        </BrowserRouter>
    )
}

export default App;

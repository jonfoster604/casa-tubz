import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import Header from './Pages/Header/Header.jsx';
import Main from './Pages/Main/Main';
import GameDeets from './Pages/GameDeets/GameDeets';


function App() {
  return (
    <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/games/:gameID" render={(routerProps) => <GameDeets {...routerProps} />} />
            </Switch>

        </BrowserRouter>
    )
}

export default App;

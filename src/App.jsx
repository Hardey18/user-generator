import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles';
import Home from './Components/Home';
import Male from './Components/Male';
import Female from './Components/Female';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="app">
          <Switch>
            <Route path="/female-users">
              <Female />
            </Route>
            <Route path="/male-users">
              <Male />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

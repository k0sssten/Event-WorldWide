import './App.css';
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import PersonalArea from './Components/PersonalArea/PersonalArea';
import QuickSearchContainer from './Components/QuickSearchContainer/QuickSearchContainer';
import SearchContainer from './Components/SearchContainer/SearchContainer';
import DescriptionProject from './Components/DescriptionProject/DescriptiomProject';
import PersonalAreaEventlist from './Components/PersonalAreaEventlist/PersonalAreaEventlist';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <main className='main'>
          <Switch>

            <Route exact path="/">
              <DescriptionProject />
            </Route>

            <Route exact path="/signUp">
              <SignUp />
            </Route>

            <Route exact path="/signIn">
              <SignIn />
            </Route>

            <Route exact path="/search">
              <SearchContainer />
            </Route>

            <Route exact path="/quicksearch">
              <QuickSearchContainer />
            </Route>

            <Route exact path="/PersonalArea">
              <PersonalArea />
            </Route>

            <Route exact path="/events">
              < PersonalAreaEventlist />
            </Route>

          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Club from './component/Club/Club';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RoutePage from './component/Routepage/RoutePage';
import NotFound from './component/404/NotFound';

function App() {
  return (
    <div >
      
     
      <Router>
      
      <Switch>
      <Route exact path="/">
      <Club></Club>
      </Route>
          <Route path="/team/:id">
            <RoutePage></RoutePage>
          </Route>
          <Route path="/*">
                <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

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

function App() {
  return (
    <div >
      
     
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
      <Club></Club>
      </Route>
          <Route path="/team/:id">
            <RoutePage></RoutePage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

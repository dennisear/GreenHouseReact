import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Trees from "./pages/Trees/Trees"
import AboutUs from "./pages/AboutUs/AboutUs"

function App() {
  return (
    <div className="App">
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/"exact component={Trees}/>
        <Route path="/AboutUs"exact component={AboutUs}/>
      </Switch>
    </Router>
    </div>
  )
}
export default App;
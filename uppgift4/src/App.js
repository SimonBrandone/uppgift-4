import { Route, Switch } from 'react-router-dom';
import events from './components/events'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Switch>
        <Route path="/" component={events} exact/> 
        {/* <Route path="/account" component={Account} /> */}
      </Switch>
      </div>
    </div>
  );
}

export default App;

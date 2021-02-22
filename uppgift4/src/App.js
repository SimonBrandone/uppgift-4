import { Route, Switch } from 'react-router-dom';
import events from './components/events'
import tickets from './components/tickets'
import buy from './components/buy'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Switch>
        <Route path="/" component={events} exact/> 
        <Route path="/info/:id" component={ tickets } />
        <Route path="/buy/:id" component={ buy } />
      </Switch>
      </div>
    </div>
  );
}

export default App;

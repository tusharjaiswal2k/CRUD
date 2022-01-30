import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Children from './Components/routes/Children';

function App (){
  return (
    <div className="App">
        <h1>User list</h1>
          <Router> 
            <Children></Children>
          </Router>
    </div>
    
  );
}
export default App;
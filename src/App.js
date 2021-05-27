import Home from './Components/Home/Home'
import About from './Components/About/About'
import Menu from './Components/Menu/Menu'
import Services from './Components/Services/Services'
import './App.css';
import { BrowserRouter,
Switch,
Route,
Link,
Router
} from "react-router-dom"

function App() {
  return (
     <BrowserRouter>
        <div className="App">
          <Menu />
          <Route path='/home' component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/about' component={About}/>
        </div>
     </BrowserRouter>
    
  );
}

export default App;

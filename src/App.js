import Home from './Components/Home/Home'
import About from './Components/About/About'
import Menu from './Components/Menu/Menu'
import Services from './Components/Services/Services'
import Work from './Components/Work/Work'
import Contacts from './Components/Contacts/Contacts'
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
          <Route exact path='/' component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/about' component={About}/>
          <Route path='/work' component={Work}/>
          <Route path='/contacts' component={Contacts}/>
        </div>
     </BrowserRouter>
    
  );
}

export default App;

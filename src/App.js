 import './App.css';
 import Header from './components/layout/Header';
 import Footer from './components/layout/Footer';
 import Launcher from './components/Launcher';
 import { useEffect } from 'react';

 import { BrowserRouter as Router, Route } from 'react-router-dom'
import Specs from './components/product/Specs';
import Login from './components/login';
import Register from './components/Register';
import {myAccount} from './actions/userac';
import store from './store';
function App() {
  useEffect(()=>{
    store.dispatch(myAccount());
  },[])
  return (
    <Router>
     <div className="App"> 
         <Header/>
         <Route path="/" component={Launcher} exact />
         <Route path="/items/:id" component={Specs} exact />
         <Route path="/login" component={Login} exact />
         <Route path="/register" component={Register} exact />
         
         <Footer/>
    </div>
    </Router>
  );
}

export default App;

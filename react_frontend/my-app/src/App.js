import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "../../node_modules/react-router-dom";
import Login from "./mycomponents/Login";
import Register from "./mycomponents/Register";
import Nav from "./mycomponents/Nav";
import Footer from "./mycomponents/Footer";
import PostList from "./mycomponents/PostList";
import Post from "./mycomponents/Post";


function App() {

  return (
    
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
          
            <Route path="/posts" component={PostList} />
            <Route path="/details/:data" component={Post} />
            
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;

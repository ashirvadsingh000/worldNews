import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Home from "./Pages/Home";
import Live from "./Pages/Live";
import Photos from "./Pages/Photos";
import States from "./Pages/States";
import Videos from "./Pages/Videos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WebStories from "./Pages/WebStories";
import ServerErrorPage from './Pages/ServerErrorPage';
import NoDataFound from './Pages/NoDataFound';
const App = () => {
  return (
  
<>
<Header/>
<Switch>
  <Route  exact path="/" component={Home} />
  <Route exact path="/live" component={Live} />
  <Route exact path="/photos" component={Photos} />
  <Route exact path="/states" component={States} />
  <Route exact path="/videos" component={Videos} />
  <Route exact path="/webstories" component={WebStories} />
  <Route exact path="/server" component={ServerErrorPage} />
  <Route exact path="/nodata" component={NoDataFound} />
  <Route  path="" component={Home} />
</Switch>
<Footer/>


</>
  )
}

export default App;
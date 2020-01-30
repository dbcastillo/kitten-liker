import React, { Component } from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import PostInfo from "./components/PostInfo";
import PostEdit from "./components/PostEdit";
import PostHome from "./components/PostHome";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <div className="topnav">
    <a className="active" href="http://localhost:3000">
      Home
    </a>
    <a href="http://localhost:3000/posts">Posts</a>
    <a href="http://localhost:3000/posts/new">Add Post</a>
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={PostHome} />
    <Route exact path="/posts" component={Posts} />
    <Route exact path="/posts/new" component={PostForm} />
    <Route exact path="/posts/:id" component={PostInfo} />
    <Route exact path="/posts/:id/edit" component={PostEdit} />
  </Switch>
);

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>

      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/Favourites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

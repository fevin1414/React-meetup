import { useContext } from "react";
import FavoritesContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";
function Favourites() {

  const favoritesCtx = useContext(FavoritesContext);

  return<section>
    <h1>Favourites </h1>
    <MeetupList meetups={favoritesCtx.favorites}/>
    </section>
}

export default Favourites;

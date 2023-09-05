import { useContext } from "react";
import FavoritesContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";
function Favourites() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if ( favoritesCtx.totalFavorites=== 0) {
    content = <p>No Favorites</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>Favourites </h1>
      {content}
    </section>
  );
}

export default Favourites;

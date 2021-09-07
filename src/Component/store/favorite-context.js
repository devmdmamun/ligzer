import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  itemIsFavorite: (id) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(id) {
    setUserFavorites((previousUserFavorite) => {
      return previousUserFavorite.concat(id);
    });
  }

  function removeFavoriteHandler(id) {
    setUserFavorites((previousUserFavorite) => {
      return previousUserFavorite.filter((item) => item.id !== id);
    });
  }

  function itemIsFavoriteHandler(id) {
    return userFavorites.some((item) => item.id === id);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;

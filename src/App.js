import React, { useEffect } from "react";

import Player from "./components/Body/Player";
import Login from "./components/Login/Login";
import { useStateValue } from "./store/StateProvider";
import { getTokenFromUrl } from "./spotify";


import SpotifyWebApi from "spotify-web-api-js";
import Header from "./components/Header/Header";


const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const webToken = hash.access_token;

    if (webToken) {
      //setToken(webToken);
      dispatch ({
        type: 'SET_TOKEN',
        token: webToken,
      })

      spotify.setAccessToken(webToken);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZF1E4yriDVhjulaF').then((track) => {
        dispatch({
          type: "SET_CURRENT_PLAYLISTS",
          currentPlaylists: track,
        })
      })
    }
  }, [dispatch, token]);

  console.log('The user is:', user); 

  return (
    <div>
      {token ? (<Player spotify={spotify} />) : (<Login />)}
      {/* <p>Dont worry, we go make am in this project, Amen!</p> */}

      {/* Spotify Logo */}
      {/* Login with spotify button */}

    </div>
  );
}

export default App;

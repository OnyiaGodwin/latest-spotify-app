import React, { useEffect } from "react";

import Player from "./Components/Body/Player";
import Login from "./Components/Login/Login";
import { useStateValue } from "./store/StateProvider";
import { getTokenFromUrl } from "./spotify";

import classes from './App.module.css';


import SpotifyWebApi from "spotify-web-api-js";


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

      spotify.getPlaylist('37i9dQZEVXcJZyENOWUFo7').then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      });

      spotify.getMyTopArtists().then((artists) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          topArtists: artists,
        })
      });

    }
  }, [dispatch, token]);

  console.log('The user is:', user); 

  return (
    <div className={classes.app}>
      {token ? (<Player spotify={spotify} />) : (<Login />)}
      {/* <p>Dont worry, we go make am in this project, Amen!</p> */}

      {/* Spotify Logo */}
      {/* Login with spotify button */}

    </div>
  );
}

export default App;

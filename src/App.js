import React, { useEffect } from "react";

import Player from "./Components/Body/Player";
import Login from "./Components/Login/Login";
import { useStateValue } from "./store/StateProvider";
import { getTokenFromUrl } from "./spotify";

import classes from "./App.module.css";

import SpotifyWebApi from "spotify-web-api-js";
import SongRow from "./Components/AllPlaylists/SongRow";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const webToken = hash.access_token;

    if (webToken) {
      //setToken(webToken);
      dispatch({
        type: "SET_TOKEN",
        token: webToken,
      });

      spotify.setAccessToken(webToken);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getArtistTopTracks("37i9dQZEVXcJZyENOWUFo7").then((track) => {
        dispatch({
          type: "SET_TOP_TRACKS",
          topTracks: track,
        });
      });

      spotify.getMyTopArtists("37i9dQZEVXcJZyENOWUFo7").then((artists) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          topArtists: artists,
        });
      });

      spotify.getAlbum("37i9dQZEVXcJZyENOWUFo7").then((album) => {
        dispatch({
          type: "SET_ALBUM",
          album: album,
        });
      });

      spotify.getNewReleases("37i9dQZEVXcJZyENOWUFo7").then((newRelease) => {
        dispatch({
          type: "SET_NEWRELEASE",
          newRelease: newRelease,
        });
      });

      spotify.getPlaylistTracks("37i9dQZEVXcJZyENOWUFo7").then((track) => {
        dispatch({
          type: "SET_TRACK",
          track: track,
        });
      });

      // spotify
      //   .play({ context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7` })
      //   .then((res) => {
      //     spotify.getMyCurrentPlayingTrack().then((r) => {
      //       dispatch({
      //         type: "SET_ITEM",
      //         item: r.item,
      //       });

      //       dispatch({
      //         type: "SET_PLAYING",
      //         playing: true,
      //       });
      //     });
      //   });

      // spotify.followArtists("37i9dQZEVXcJZyENOWUFo7")
      //   .then((featuredTrack) => {
      //     dispatch({
      //       type: "SET_FEATURED_TRACK",
      //       featuredTrack: featuredTrack,
      //     });
      //   });
    }
  }, [dispatch, token]);

  // console.log('The user is:', user);

  return (
    <div className={classes.app}>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

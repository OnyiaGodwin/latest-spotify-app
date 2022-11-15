import React from "react";

import classes from "./AllPlaylist.module.css";

import { useStateValue } from "../../store/StateProvider";
import TopArtists from "./TopArtists";
import DiscoverWeekly from "./DiscoverWeekly";
import Playlists from "./Playlists";
import SongRow from "./SongRow";
import NewRelease from "./NewRelease";
import Tracks from "./Tracks";

function AllPlaylist() {
  const [
    { spotify, track, featuredTrack, newRelease, discover_weekly, playlists, topArtists, topTracks, album },
    dispatch,
  ] = useStateValue();

  //const id = "37i9dQZEVXcJZyENOWUFo7";

  console.log("This is the featuredTrack content ---->>>", featuredTrack);

  // console.log("This is the discover_weekly content >>>", discover_weekly);

  // console.log("This is the album content >>>", album);

  // console.log("This is the topTracks content >>>", topTracks);

  const playPlaylist = (id) => {
    spotify
      .play({ context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7` })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });

          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:37i9dQZEVXcJZyENOWUFo7`],
        //uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });

          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className={classes.allPlaylist}>
      <section className={classes.allPlaylist__mainContainer}>
        <div className={classes.allPlaylist__title__container}>
          <div className={classes.allPlaylist__title__container__left}>
            <h2>Top Artists</h2>
          </div>
          <button>SEE ALL</button>
        </div>
        <span className={classes.allPlaylist__info}>
          {topArtists?.items?.map((artist) => {
            // console.log('This is the artist top Artists >>>', artist)
            return (
              <TopArtists
                playPlaylist={playPlaylist}
                playSong={playSong}
                artistInfo={artist}
              />
            );
          })}
        </span>
      </section>

      <section className={classes.allPlaylist__mainContainer}>
        <div className={classes.allPlaylist__title__container}>
          <div className={classes.allPlaylist__title__container__left}>
            <h2>{discover_weekly?.name}</h2>
          </div>
          <button>SEE ALL</button>
        </div>
        <span className={classes.allPlaylist__info}>
          {discover_weekly?.tracks?.items?.map((item) => {
            // console.log('This is the track for discover weekly>>>',item)

            return (
              <DiscoverWeekly
                playPlaylist={playPlaylist}
                playSong={playSong}
                info={item}
              />
            );
          })}
        </span>
      </section>

      <section className={classes.allPlaylist__mainContainer}>
        <div className={classes.allPlaylist__title__container}>
          <div className={classes.allPlaylist__title__container__left}>
            <h2>Fresh new music</h2>
          </div>
          <button>SEE ALL</button>
        </div>
        <span className={classes.allPlaylist__info}>
          {newRelease?.albums?.items?.map((item) => {

            return (
              <NewRelease
                playPlaylist={playPlaylist}
                playSong={playSong}
                info={item}
              />
            );
          })}
        </span>
      </section>

      <section className={classes.allPlaylist__mainContainer}>
        <div className={classes.allPlaylist__title__container}>
          <div className={classes.allPlaylist__title__container__left}>
            <h2>Tracks</h2>
          </div>
          <button>SEE ALL</button>
        </div>
        <span className={classes.allPlaylist__info}>
          {track?.items?.map((item) => {
            // console.log('This is the track for discover weekly>>>',item)

            return (
              <Tracks
                playPlaylist={playPlaylist}
                playSong={playSong}
                info={item}
              />
            );
          })}
        </span>
      </section>



      {/* <section className={classes.allPlaylist__mainContainer}>
        <div className={classes.allPlaylist__title__container}>
          <div className={classes.allPlaylist__title__container__left}>
            <h2>{playlists?.name}</h2>
          </div>
          <button>SEE ALL</button>
        </div>
        <span className={classes.allPlaylist__info}>
          {playlists?.tracks?.items?.map((item) => {
            console.log('This is the track for discover weekly>>>',item)

            return <Playlists info={item} />;
          })}
        </span>
      </section> */}
    </div>
  );
}

export default AllPlaylist;

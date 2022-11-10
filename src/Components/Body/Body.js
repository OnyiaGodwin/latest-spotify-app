import React from "react";
import { useStateValue } from "../../store/StateProvider";

import Barner from "../Barner/Barner";
import Header from "../Header/Header";
import classes from "./Body.module.css";
import AllPlaylist from "../AllPlaylists/AllPlaylist";

function Body(props) {
  const { spotify } = props;
  const [{ discover_weekly, playlists, topArtists }, dispatch] =
    useStateValue();
  // let a = discover_weekly?.tracks?.items;

  // console.log("This is for items >>", playlists);
  // console.log("This is discover weekly >>", discover_weekly);
  return (
    <div className={classes.body}>
      <Header spotify={spotify} />
      <Barner />

      <AllPlaylist />

      {/* 
      <PlaylistOptions />
      {discover_weekly.tracks.items.map((track) => (
        <PlaylistOptions
          id={discover_weekly?.id}
          title={discover_weekly?.name}
          description={discover_weekly?.description}
          image={discover_weekly?.images[0]?.url}
          artistName={track?.artists?.name}
          artistUrl={track?.artists?.uri}
        />
      ))} */}

      {/* <div className={classes.body__discoverWeekly}>
        <img
          className={classes.body__image}
          src={discover_weekly?.images[0]?.url}
          alt=""
        />
        <h4 className={classes.body__description}>
          {discover_weekly?.description}
        </h4>
      </div> */}
    </div>
  );
}

export default Body;

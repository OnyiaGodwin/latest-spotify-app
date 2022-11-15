import React, { useEffect } from 'react';

import classes from './SongRow.module.css';
import { useStateValue } from "../../store/StateProvider";
import axios from 'axios';

function SongRow() {
  const [{ token }, dispatch ] = useStateValue();

  // useEffect(() => {
  //   const getPlaylistData = async () => {
  //     const response = await axios.get(
  //       "https://api.spotify.com/v1/me/playlists",
  //       {
  //         headers: {
  //           Authorization: "Bearer" + token,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log("This is the response --->>> ", response)
  //   }

  //   getPlaylistData();
  // }, [token])
  
  return (
    <div className={classes.songRow}>
      
    </div>
  );
}


export default SongRow
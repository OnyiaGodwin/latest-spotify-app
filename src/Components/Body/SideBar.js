import React, { useState } from "react";

import classes from "./SideBar.module.css";
import SideBarOptions from "./SideBarOptions";
import { useStateValue } from "../../store/StateProvider";

import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FavoriteIcon from "@mui/icons-material/Favorite";

function SideBar() {
  const [{ playlists }, dispatch] = useStateValue();
  
  return (
    <div className={classes.sidebar}>
      <img
        className={classes.sidebar__logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />

      <SideBarOptions title="Home" Icon={HomeIcon} />
      <SideBarOptions title="Search" Icon={SearchIcon} />
      <SideBarOptions title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <SideBarOptions title="Create Playlist" Icon={AddBoxIcon} />
      <SideBarOptions title="Liked Songs" Icon={FavoriteBorderIcon} />
      <hr />

      {playlists?.items?.map((playlist) => (
        <SideBarOptions title={playlist.name} />
      ))}
    </div>
  );
}

export default SideBar;

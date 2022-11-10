import React from "react";
import classes from "./PlaylistOptions.module.css";

function PlaylistOptions({ title, description, image, artistName, artistUrl }) {
  return (
    <section className={classes.playlistOptions}>
      <div className={classes.playlist__mainContainer}>
        <div className={classes.playlist__inner__inner}>
          <div className={classes.playlist__imageContainer}>
            <img className={classes.playlist__image} src={image} alt="" />
          </div>
          <h2>{artistName}</h2>
          <h5>{description}</h5>
        </div>
      </div>
    </section>
  );
}

export default PlaylistOptions;

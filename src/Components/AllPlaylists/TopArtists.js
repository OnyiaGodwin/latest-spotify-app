import React from "react";
import classes from "./TopArtists.module.css";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

function TopArtists({ artistInfo, playPlaylist, playSong }) {
  console.log('This is it >>> ', artistInfo);
  
  return (
    <section className={classes.topArtists__mainContainer} onClick={playSong}>
      <div className={classes.topArtists__container}>
        <div className={classes.topArtists__imageContainer}>
          <img
            className={classes.topArtists__image}
            src={artistInfo?.images[0]?.url}
            alt={artistInfo?.name}
          />
        </div>
        <span className={classes.topArtists__playButton__wrapperIcon}>
          <PlayCircleFilledIcon
            color="success"
            className={classes.topArtists__playButton__Icon}
            onClick={playPlaylist}
          />
        </span>
        <div className={classes.topArtists__textContainer}>
          <a className={classes.topArtists__text__anchor}>
            <h4 className={classes.topArtists__anchorText}>
              {artistInfo?.name}
            </h4>
          </a>
          <div className={classes.topArtists__songInfoContainer}>
            <a className={classes.topArtists__songTextOne}>
              {artistInfo?.type}
            </a>
            ","
            <a className={classes.topArtists__songTextTwo}>
              {` genres: ${artistInfo?.genres}`},
            </a>
            ""
            <a className={classes.topArtists__songTextThird}>
              {`Popularity: ${artistInfo?.popularity}`},
            </a>
            ""
            <a className={classes.topArtists__songTextThird}>and</a>""
            <a className={classes.topArtists__songTextThird}>more...</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopArtists;

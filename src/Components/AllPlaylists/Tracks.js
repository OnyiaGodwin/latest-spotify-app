import React from "react";

import classes from "./Tracks.module.css";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

export default function Tracks({ playSong, playPlaylist, info }) {
  // console.log("This is the track info content ---->>>", info);

  return (
    <section className={classes.tracks__mainContainer} onClick={playSong}>
      <div className={classes.tracks__container}>
        <div className={classes.tracks__imageContainer}>
          <img
            className={classes.tracks__image}
            src={info?.track?.album?.images[0]?.url}
            alt={info?.track?.name}
          />
        </div>
        <span className={classes.tracks__playButton__wrapperIcon}>
          <PlayCircleFilledIcon
            color="success"
            className={classes.tracks__playButton__Icon}
            onClick={playPlaylist}
          />
        </span>
        <div className={classes.tracks__textContainer}>
          <a className={classes.tracks__text__anchor}>
            <h4 className={classes.tracks__anchorText}>{info?.track?.name}</h4>
          </a>
          <div className={classes.tracks__songInfoContainer}>
            <a className={classes.tracks__songTextOne}>
              {info?.track?.artist?.map((artist) => `${artist.name} `)}
            </a>
            <div className={classes.tracks__songInfoContainer}>
              <a className={classes.tracks__songTextOne}>
                {`${info?.track?.type}`}
              </a>
              ","
              <a className={classes.tracks__songTextThird}>
                {`Popularity: ${info?.track?.popularity}`},
              </a>
              ""
              <a className={classes.tracks__songTextThird}>and</a>""
              <a className={classes.tracks__songTextThird}>more...</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

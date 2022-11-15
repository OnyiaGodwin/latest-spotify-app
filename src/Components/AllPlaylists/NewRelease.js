import React from "react";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import classes from "./NewRelease.module.css";

export default function NewRelease({ playSong, playPlaylist, info }) {
  return (
    <section
      className={classes.newRelease__mainContainer}
      onClick={playSong}
    >
      <div className={classes.newRelease__container}>
        <div className={classes.newRelease__imageContainer}>
          <img
            className={classes.newRelease__image}
            src={info?.images[0]?.url}
            alt={info?.name}
          />
        </div>
        <span className={classes.newRelease__playButton__wrapperIcon}>
          <PlayCircleFilledIcon
            color="success"
            className={classes.newRelease__playButton__Icon}
            onClick={playPlaylist}
          />
        </span>
        <div className={classes.newRelease__textContainer}>
          <a className={classes.newRelease__text__anchor}>
            <h4 className={classes.newRelease__anchorText}>
              {info?.name}
            </h4>
          </a>
          <div className={classes.newRelease__songInfoContainer}>
            <a className={classes.newRelease__songTextOne}>
              {info?.artists.map((artist) => `${artist.name} `)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

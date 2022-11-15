import React from "react";

import classes from "./DiscoverWeekly.module.css";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

export default function DiscoverWeekly({ info, playPlaylist, playSong }) {
  // console.log('This is DiscoverWeekly info >>>', info)

  return (
    <section
      className={classes.discoverWeekly__mainContainer}
      onClick={playSong}
    >
      <div className={classes.discoverWeekly__container}>
        <div className={classes.discoverWeekly__imageContainer}>
          <img
            className={classes.discoverWeekly__image}
            src={info?.track?.album?.images[0]?.url}
            alt=""
          />
        </div>
        <span className={classes.discoverWeekly__playButton__wrapperIcon}>
          <PlayCircleFilledIcon
            color="success"
            className={classes.discoverWeekly__playButton__Icon}
            onClick={playPlaylist}
          />
        </span>
        <div className={classes.discoverWeekly__textContainer}>
          <a className={classes.discoverWeekly__text__anchor}>
            <h4 className={classes.discoverWeekly__anchorText}>
              {info?.track?.name}
            </h4>
          </a>
          <div className={classes.discoverWeekly__songInfoContainer}>
            <a className={classes.discoverWeekly__songTextOne}>
              {info?.track?.artists.map((artist) => `${artist.name} `)}
            </a>
            {/* ","
            <a className={classes.discoverWeekly__songTextTwo}>
              {` genres: ${info?.genres}`},
            </a>
            ""
            <a className={classes.discoverWeekly__songTextThird}>
              {`Popularity: ${info?.popularity}`},
            </a>
            <a className={classes.discoverWeekly__songTextThird}>and</a>""
            <a className={classes.discoverWeekly__songTextThird}>more...</a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

import classes from "./SongRowList.module.css";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

function SongRowList({ info }) {
 
  return (
    <section className={classes.songRowList__mainContainer}>
      <div className={classes.songRowList__container}>
        <div className={classes.songRowList__imageContainer}>
          <img
            className={classes.songRowList__image}
            src=""
            alt=""
          />
        </div>
        <span className={classes.SongRowList__playButton__wrapperIcon}>
          <PlayCircleFilledIcon
            color="success"
            className={classes.SongRowList__playButton__Icon}
          />
        </span>
        <div className={classes.songRowList__textContainer}>
          <a className={classes.songRowList__text__anchor}>
            <h4 className={classes.songRowList__anchorText}>
              {/* {info?.track?.name} */}
            </h4>
          </a>
          <div className={classes.songRowList__songInfoContainer}>
            <a className={classes.songRowList__songTextOne}>
              {/* {info?.track.map((track, i) => track?.artists[0]?.name)}, */}
            </a>
            {/* ","
            <a className={classes.songRowList__songTextTwo}>{"popularity"},</a>
            ""
            <a className={classes.songRowList__songTextThird}>{"genres"},</a>
            ""
            <a className={classes.songRowList__songTextThird}>and</a>""
            <a className={classes.songRowList__songTextThird}>more...</a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SongRowList;
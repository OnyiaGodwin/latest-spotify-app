import React from "react";
import classes from "./RecentPlayed.module.css";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";


function RecentPlayed({ name, image }) {
  return (
    <section className={classes.recentPlayed}>
      <div className={classes.recentPlayed__items}>
        <div className={classes.recentPlayed__container}>
          <img className={classes.recentPlayed__image} src={image} alt="" />
            <h2 className={classes.recentPlayed__infor}>{name}</h2>
          <span className={classes.recentPlayed__playButton__wrapperIcon}>
            <PlayCircleFilledIcon
              color="success"
              className={classes.recentPlayed__playButton__Icon}
            />
          </span>
        </div>
      </div>
    </section>
  );
}

export default RecentPlayed;

import React from "react";
import classes from "./RecentPlayed.module.css";

function RecentPlayed({ name, image }) {
  return (
    <section className={classes.recentPlayed}>
      <div className={classes.recentPlayed__items}>
        <div className={classes.recentPlayed__container}>
          <img className={classes.recentPlayed__image} src={image} alt="" />
            <h2 className={classes.recentPlayed__infor}>{name}</h2>
        </div>
      </div>
    </section>
  );
}

export default RecentPlayed;

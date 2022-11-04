import React from 'react';
import classes from './RecentPlayed.module.css';

function RecentPlayed({ title, name, image }) {
  return (
    <section className={classes.recentPlayed}>
        <div className={classes.recentPlayed__title}>
            <div className={classes.recentPlayed__title__left}>
                <img src={image} alt='' />
                <h2 className={classes.recentPlayed__title__left__title}>{title}</h2>
                <h2 className={classes.recentPlayed__title__left__title}>{name}</h2>
            </div>
            <a className={classes.recentPlayed__right}>See all</a>
        </div>
    </section>
  )
}

export default RecentPlayed
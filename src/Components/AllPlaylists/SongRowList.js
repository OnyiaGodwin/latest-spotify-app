import React from "react";

import classes from "./SongRowList.module.css";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

export default function SongRowList({
  image,
  description,
  title,
  followers,
  popularity,
  genres,
  artistImageUrl,
}) {
  // console.log('This is for the image>>', image)
  // console.log('This is for the description>>', description)
  // console.log('This is for the artistName_1>>', artistName_1)
  // console.log('This is for the artistName_2>>', artistName_2)
  // console.log('This is for the artistName_3>>', artistName_3)
  // console.log('This is for the artistImageUrl>>', artistImageUrl)
  // console.log('This is for the title>>', title)
  return (
    <section className={classes.songRowList__mainContainer}>
      <div className={classes.songRowList__container}>
        <div className={classes.songRowList__imageContainer}>
          <img
            className={classes.songRowList__image}
            src={artistImageUrl}
            alt=""
          />
        </div>
        <span className={classes.SongRowList__playButton__wrapperIcon}>
          <PlayCircleFilledIcon color="success" 
            className={classes.SongRowList__playButton__Icon}
          />
        </span>
      </div>
      <div className={classes.SongRowList__playButton__container}>
        <div className={classes.SongRowList__playButton__innerContainer}>
          <button className={classes.SongRowList__playButton}>
            <span className={classes.SongRowList__playButton__wrapper}>
              <span className={classes.SongRowList__playButton__wrapperIcon}>
                <PlayCircleFilledIcon
                  className={classes.SongRowList__playButton__Icon}
                />
              </span>
            </span>
          </button>
        </div>
      </div>
      <div className={classes.songRowList__textContainer}>
        <a className={classes.songRowList__text__anchor}>
          <h4 className={classes.songRowList__anchorText}>{title}</h4>
        </a>
        <div className={classes.songRowList__songInfoContainer}>
          <a className={classes.songRowList__songTextOne}>{followers},</a>
          ","
          <a className={classes.songRowList__songTextTwo}>{popularity},</a>
          ""
          <a className={classes.songRowList__songTextThird}>{genres},</a>
          ""
          <a className={classes.songRowList__songTextThird}>and</a>""
          <a className={classes.songRowList__songTextThird}>more...</a>
        </div>
      </div>
    </section>
  );
}

import React from "react";

import classes from "./Footer.module.css";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__left}>
        <img
          className={classes.footer__albumLogo}
          src="https://talkglitz.media/wp-content/uploads/2018/06/Download-mp3-Steve-Holy-Good-Morning-Beautiful.jpg"
          alt=""
        />
        <div className={classes.footer__songInfo}>
          <h4>Good</h4>
          <span>
            <p>Steve</p>
          </span>
        </div>

        <span className={classes.footer__icons}>
          <FavoriteIcon className={classes.footer__left__favoriteIcon} />
          <PictureInPictureAltIcon
            className={classes.footer__left__pictureIcon}
          />
        </span>
      </div>

      <div className={classes.footer__center}>
        <ShuffleIcon className={classes.footer__shulRepIcon} />
        <SkipPreviousIcon className={classes.footer__prevNextIcon} />
        <PlayCircleOutlineIcon
          fontsize="large"
          className={classes.footer__playIcon}
        />
        <SkipNextIcon className={classes.footer__prevNextIcon} />
        <RepeatIcon className={classes.footer__shulRepIcon} />
      </div>

      <div className={classes.footer__right}>
        {
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <MicExternalOnIcon />
            </Grid>
            <Grid item>
              <OfflineShareIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        }
      </div>
    </div>
  );
}

export default Footer;

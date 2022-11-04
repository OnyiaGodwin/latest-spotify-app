import React from "react";

import { useStateValue } from "../../store/StateProvider";
import classes from "./Header.module.css";

import Avatar from "@mui/material/Avatar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Header(props) {
  const { spotify } = props;
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <button className={classes.header__left__arrowLeft}>
          <ArrowBackIosNewIcon />
        </button>
        <button className={classes.header__left__arrowRight}>
          <ArrowForwardIosIcon />
        </button>
      </div>

      <button className={classes.header__right__button}>Upgrade</button>
      <div className={classes.header__right}>
        <Avatar
          className={classes.header__right__userAvatar}
          src={user?.images[0]?.url}
          alt={user?.display_name}
        />
        <h4>{user?.display_name}</h4>
        <ArrowDropDownIcon className={classes.header__right__dropdownArrow} />
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import classes from "./SideBarOptions.module.css";

function SideBarOptions({ title, Icon }) {
  // const { title, Icon } = props;

  return (
    <div className={classes.sideBarOptions}>
      <span className={classes.sideBarOptions__items}>
        {Icon && <Icon className={classes.sideBarOptions__icon} />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </span>
    </div>
  );
} 

export default SideBarOptions;

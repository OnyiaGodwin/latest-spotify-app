import React from "react";

import Barner from "../Barner/Barner";
import Header from "../Header/Header";
import classes from "./Body.module.css";

function Body(props) {
  const { spotify } = props;
  // const [{ discover_weekly }, dispatch] = useStateValue();

  // console.log(discover_weekly)
  return (
    <div className={classes.body}>
      <Header spotify={spotify} />
      <Barner />

      {/* <div className={classes.body__discoverWeekly}>
        <img className={classes.body__image} src={discover_weekly?.images[0].url} alt="" />
        <h4 className={classes.body__description}>
          {discover_weekly?.description}
        </h4>
      </div> */}
    </div>
  );
}

export default Body;

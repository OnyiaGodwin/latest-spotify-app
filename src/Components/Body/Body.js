import React from "react";
import { useStateValue } from "../../store/StateProvider";
import RecentPlayed from "../Barner/RecentPlayed";
import Header from "../Header/Header";
import classes from "./Body.module.css";

function Body(props) {
  const { spotify } = props;
  const [{ currentPlaylists }, dispatch] = useStateValue();

  console.log("this is the currentPlaylists:", currentPlaylists);
  return (
    <div className={classes.body}>
      <Header spotify={spotify} />

      {currentPlaylists.map((item) => (
        <RecentPlayed
          title={item?.description}
          name={item?.name}
          image={item?.images[0]?.url}
        />
      ))}
      <div className={classes.body__barner}></div>
    </div>
  );
}

export default Body;

import React, { useEffect, useState } from "react";

import RecentPlayed from "./RecentPlayed";
import classes from "./Barner.module.css";
import { useStateValue } from "../../store/StateProvider";

function Barner() {
  const [{ topArtists }] = useStateValue();
  const [morning, setMorning] = useState(false);
  
  // console.log("this is top tracks >>", topArtists);

  useEffect(() => {
    let date = new Date();
    let curHour = date.getHours();
    if (curHour < 12) {
      setMorning(true);
    } else {
      setMorning(false);
    }
  }, []);

  return (
    <div className={classes.barner}>
      <div className={classes.barner__greeting}>
        {morning ? (
          <h2 className={classes.barner__greeting__text}>Good Morning</h2>
        ) : (
          <h2 className={classes.barner__greeting__text}>Good Afternoon</h2>
        )}
      </div>
      <div className={classes.barner__albums}>
        {topArtists?.items?.map((artist) => {
          return (
            <RecentPlayed
              id={artist?.id}
              name={artist?.name}
              image={artist?.images[0]?.url}
              genres={artist?.genres[0]}
            />
          );
        })}
      </div>

      <div className={classes.barner__albums}>
        {topArtists?.items?.map((artist) => {
          return (
            <RecentPlayed
              id={artist?.id}
              name={artist?.name}
              image={artist?.images[0]?.url}
              genres={artist?.genres[0]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Barner;

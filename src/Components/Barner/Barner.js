import React, { useEffect, useState } from "react";

import RecentPlayed from "./RecentPlayed";
import classes from "./Barner.module.css";
import { useStateValue } from "../../store/StateProvider";

function Barner() {
  const [{ topArtists }] = useStateValue();
  const [morning, setMorning] = useState(false);
  const [afternoon, setAfternoon] = useState(false);
  const [evening, setEvening] = useState(false);

  // console.log("this is top tracks >>", topArtists);

  useEffect(() => {
    const date = new Date();
    let hr = date.getHours("en-US", { hours12: false });
    // console.log("this is hour >>", hr);
    // hr= 16;
    
    if (hr < 12) {
      setMorning(true);
      setAfternoon(false);
      setEvening(false);
    } else if (hr >= 12 && hr < 16) {
      setAfternoon(true);
      setMorning(false);
      setEvening(false);
    } else {
      setEvening(true);
      setMorning(false);
      setAfternoon(false);
    }
  }, []);

  return (
    <div className={classes.barner}>
      <div className={classes.barner__greeting}>
        {morning && (
          <h2 className={classes.barner__greeting__text}>Good morning</h2>
        )}
        {afternoon && (
          <h2 className={classes.barner__greeting__text}>Good afternoon</h2>
        )}
        {evening && (
          <h2 className={classes.barner__greeting__text}>Good evening</h2>
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

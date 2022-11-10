import React from "react";
import classes from "./AllPlaylist.module.css";
import SongRowList from './SongRowList';
import { useStateValue } from "../../store/StateProvider";

function AllPlaylist() {
  const [{ discover_weekly, playlists, topArtists }, dispatch] =
  useStateValue(); 
  
  return (
    <div className={classes.allPlaylist}>
       <section className={classes.allPlaylist__mainContainer}>
        <div className={classes.allPlaylist__title__container}>
          <div className={classes.allPlaylist__title__container__left}>
            <h2>{discover_weekly?.name}</h2>
          </div>
          <button>SEE ALL</button>
        </div>
        <span className={classes.allPlaylist__info}>
          {topArtists?.items?.map((artist) => {
            console.log('This is the artist top Artists >>>',artist)
        return (
          <SongRowList
            id={artist?.id}
            // description={discover_weekly?.description}
            // image={discover_weekly?.images[0]?.url}
            title={artist?.name}
            genres={artist?.genres}
            followers={artist?.followers?.total}
            popularity={artist?.popularity}
            artistImageUrl={artist?.images[0]?.url}
          />
        );
      })}
        </span>
      </section>


      <section className={classes.allPlaylist__mainContainer}>
        <div className={classes.allPlaylist__title__container}>
          <div className={classes.allPlaylist__title__container__left}>
            <h2>{discover_weekly?.name}</h2>
          </div>
          <button>SEE ALL</button>
        </div>
        <span className={classes.allPlaylist__info}>
          {discover_weekly?.items?.map((track) => {
            console.log('This is the track for discover weekly>>>',track)
        return (
          <SongRowList
            id={discover_weekly?.id}
            description={discover_weekly?.description}
            // image={discover_weekly?.images[0]?.url}
            title={track?.name}
            artistName_1={track?.artists[0]?.name}
            artistName_2={track?.artists[1]?.name}
            artistName_3={track?.artists[2]?.name}
            artistImageUrl={track?.artists?.uri}
          />
        );
      })}
        </span>
      </section>

      <section className={classes.allPlaylist__mainContainer}>
        <span className={classes.allPlaylist__info}>
          <SongRowList />
          <SongRowList />
          <SongRowList />
          <SongRowList />
          <SongRowList />
        </span>
      </section>
    </div>
  );
}

export default AllPlaylist;

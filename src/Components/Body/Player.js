import React from 'react';
import Body from './Body';
import Footer from '../Footer/Footer';
import classes from './Player.module.css'
import SideBar from './SideBar';

function Player(props) {
  const { spotify } = props;

  return (
    <div className={classes.player}>
        <div className={classes.player__body}>
          {/* Sidebar */}
          <SideBar />

          {/* Body */}
          <Body spotify={spotify}/>
        </div>

        <Footer />
        {/* Footer */}
    </div>
  )
}

export default Player;
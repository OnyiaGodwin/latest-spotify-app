export const initialState = {
  user: null,
  spotify: null,
  playlists: [],
  discover_weekly: [],
  topArtists: [],
  topTracks: [],
  album: [],
  track: [],
  newRelease: [],
  featuredTrack: [],
  playing: false,

  item: null,
  token: null,
  //Remove after developing
  // token:
  //   "BQCdGREZCgxO1YdmYc1CfjZIX3nzruGcllPmClASgvKw0vZJL9…rU_t1pQcKE2VBsZj_-YNsGEe6gxBMIw283_jWU9uQj2MYcovA",
};

const reducer = (state, action) => {
  console.log(action);

  //NB: Action has --> Type, [payload === user]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        topArtists: action.topArtists,
      };

    case "SET_TOP_TRACKS":
      return {
        ...state,
        topTracks: action.topTracks,
      };

    case "SET_ALBUM":
      return {
        ...state,
        album: action.album,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_NEWRELEASE":
      return {
        ...state,
        newRelease: action.newRelease,
      };

    case "SET_TRACK":
      return {
        ...state,
        track: action.track,
      };

    case "SET_FEATURED_TRACK":
      return {
        ...state,
        featuredTrack: action.featuredTrack,
      };

    default:
      return state;
  }
};

export default reducer;

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token: null,
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

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    
      case "SET_CURRENT_PLAYLISTS":
        return {
          ...state,
          currentPlaylists: action.currentPlaylists,
        };

    default:
      return state;
  }
};

export default reducer;

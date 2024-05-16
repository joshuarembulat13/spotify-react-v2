export const authEndpoint = "http://accounts.spotify.com/authorize";

const redirectURL = "http://localhost:3000";

const clientId = "1d5b239c6f254114b43186c1a65103bf";

const scopes = [
  "playlist-read-private",
  "user-read-email",
  "user-read-private",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

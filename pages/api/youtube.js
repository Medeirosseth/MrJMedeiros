import axios from "axios";

const KEY = "AIzaSyCYTXonFXGow8_91MYczh8m4W5U1d3QV7o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

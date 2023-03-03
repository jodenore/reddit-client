import axios from "axios";

let URL = "https://www.reddit.com/r/Chiraqology.json?limit=10";
let reddit = [];
const fetchData = async () => {
  const res = await axios.get(URL);
  const data = await res.data.data;
  console.log(data.children);
};

fetchData();

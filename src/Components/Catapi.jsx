import React from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";
import { faker } from "@faker-js/faker";
const randomLorem = faker.lorem.sentence(5);

async function randomCats() {
  try {
    const res = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=9&has_breeds=1&api_key=live_TvF2h2immnSB1i2p6JrCfsqC1kMDEcDBPqvSaHzKEehoByKCx55jzNi3iiFx0QRt"
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}


// useState - Assgins propity like colour, It gives it memory
const Catapi = () => {
  const [catLists, setMyCats] = useState([]);
  async function handleButton() {
    const response = await randomCats();
    setMyCats(response);
  }
  return (
    <div>
      {catLists.map((cat) => {
        return (
          <div key={cat.width}  className="Card">
            <img src={cat.url} alt="" key={cat.id} />
            <p key={cat.height} className="Para">{randomLorem}</p>
          </div>
        );
      })}
      
      <button id="catButton" onClick={handleButton} variant="contained">More cats!</button>
    
    </div>
  );
};

export default Catapi;

// axios
//   .get(
//     "https://api.thecatapi.com/v1/images/search?limit=11&api_key=live_TvF2h2immnSB1i2p6JrCfsqC1kMDEcDBPqvSaHzKEehoByKCx55jzNi3iiFx0QRt"
//   )
//   .then((res) => {
//     console.log(res.data);
//     return res.data
//   })
//   .catch((error) => {
//     console.log(error);
//   });

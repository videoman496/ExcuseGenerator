import "./App.css";
import Axios from "axios";

import { useEffect, useState } from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
        var content = generatedExcuse;
      }
    );
  };
  
  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family</button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

      <p> {generatedExcuse} </p>
      <TwitterShareButton
    url={'http://localhost:5173/'}
    options={{ text: 'Check this Excuses Generator', via: 'excusegenrator' }}
  />
    </div>
  );
}

export default App;
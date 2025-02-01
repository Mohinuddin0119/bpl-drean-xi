import "./App.css";
import "./index.css";
import Header from "./Header/header";
import Banner from "./banner/Banner";
import Player from "./Player/Player";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [players, setPlayers] = useState([]);

  const [count, setCount] = useState(0);

  const handleCoin = (n) => {
    const newCount = count + n;
    setCount(newCount);
    toast.success("Credit Added to your Acoount!");
  };

  useEffect(() => {
    fetch("./player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="main-point">
      <Header count={count}></Header>
      <Banner handleCoin={handleCoin}></Banner>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {players.map((player) => (
          <Player player={player} key={player.id}></Player>
        ))}
      </div>

      {/* toast */}
      <div>
        <button onClick={handleCoin}></button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;

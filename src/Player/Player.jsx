import PropTypes from "prop-types";
import flag from "../assets/flag 1.png";
import "./player.css";

const Player = ({ player }) => {
  const { name, country, img, category, hand, price } = player;
  console.log(player);
  return (
    <div className="mt-20 ">
      <div className="bg-gray-100 shadow-2xl rounded-lg p-5 space-y-3">
        <div className="border bg-gray-400 h-52 rounded-lg border-none ">
          <img className="p-3" src={img} alt="" />
        </div>
        <h2>{name}</h2>
        <div className="cat-con">
          <div className="flag-con">
            <img className="w-10 h-5" src={flag} alt="" />
            <p>{country}</p>
          </div>
          <p className="rounded-lg shadow bg-gray-200 p-2">{category}</p>
        </div>
        <div className="border border-gray-300"></div>
        <h6 className="pl-5">Rating</h6>
        <div className="flex flex-col md:flex-row justify-between">
          <h6>{hand}</h6>
          <p className="text-gray-500">{hand}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <h6>Price: ${price}</h6>
          <div className=" ">
            <button className="border border-zinc-900 rounded-lg bg-white px-3 py-2">
              Choose player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Player;

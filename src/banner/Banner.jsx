import banner from "../assets/banner-main.png";
import PropTypes from 'prop-types'
const Banner = ({handleCoin}) => {
  return (
    <div className="banner-head">
      <div className="banner-container ">
        <div className="banner-img mb-3">
          <img className="bannner-image" src={banner} alt="" />
        </div>
        <h2 className="banner-title mb-3 text-2xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="banner-info text-gray-400 mb-3">
          Beyond Boundaries Beyond Limits
        </p>
        <div >
          <div className="banner-btn-con ">
            <button onClick={() => handleCoin(60000)} className="banner-btn">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
    handleCoin:PropTypes.number.isRequired
}
export default Banner;

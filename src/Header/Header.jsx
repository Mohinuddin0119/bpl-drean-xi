import logo from '../assets/logo.png';
import coin from '../assets/dollar 1.png'
import PropTypes from 'prop-types'

const Header = ({count}) => {
  return (
    <div className="navbar py-5">
      <div className="">
        <img className="navbar-img" src={logo} alt="" />
      </div>
      <div className="header-raw">
        <div >
          <a className="nav" href="">Home</a>
          <a className="nav" href="">Fixture</a>
          <a className="nav" href="">Teams</a>
          <a className="nav" href="">Schedules</a>
        </div>
        <button className="navbar-btn mb-3">
          <span>{count}</span> Coin <img src={coin}></img>
        </button>
      </div>
    </div>
  );
};

Header.propTypes ={
  count:PropTypes.number.isRequired,
}

export default Header;

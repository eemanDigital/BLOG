import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=physio">
            <h6>Home</h6>
          </Link>
          <Link className="link" to="/?cat=item1">
            <h6>item1</h6>
          </Link>{" "}
          <Link className="link" to="/?cat=item2">
            <h6>Item2</h6>
          </Link>{" "}
          <Link className="link" to="/?cat=item3">
            <h6>item3</h6>
          </Link>{" "}
          <Link className="link" to="/?cat=item4">
            <h6>item4</h6>
          </Link>{" "}
          <Link className="link" to="/?cat=item6">
            <h6>item6</h6>
          </Link>
          <span>Maryam</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="write">
              write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

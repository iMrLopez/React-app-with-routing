import { Link } from "react-router-dom";

function Header(props) {
    return (
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ol>
    );
}


export default Header;
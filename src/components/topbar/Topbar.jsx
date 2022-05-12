import "./topbar.scss";
import { PersonOutline, MailOutline } from "@material-ui/icons";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            VT
          </a>
          <div className="itemContainer">
            <PersonOutline className="icon" />
            <span>+33626349314</span>
          </div>
          <div className="itemContainer">
            <MailOutline className="icon" />
            <span>vmeturan@gmail.fr</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

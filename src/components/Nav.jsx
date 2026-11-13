import DateTime from "./DateTime"
import "./Nav.scss"



const Nav = () => {
  return (
 <nav>
    <div className="left">

        <div className="apple-icon">
            <img src="./navbar-icons/apple.svg" alt="apple-icon" />
        </div>

        <div className="nav-item">
            <p>Jawad Arshad</p>
        </div>
        <div className="nav-item">
            <p>File</p>
        </div>
        <div className="nav-item">
            <p>Window</p>
        </div>
        <div className="nav-item">
            <p>Terminal</p>
        </div>

    </div>

    <div className="right">

        <div className="nav-icon">
            <img src="/navbar-icons/wifi.svg" alt="wifi-icon" />
        </div>

        <div className="nav-item">
            <DateTime />
        </div>

    </div>
 </nav>
  )
}

export default Nav

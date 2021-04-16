import { FC } from "react"
import { Link } from "react-router-dom"
import Hamburger from "../../svg/hamburger"
import * as path from "../../utils/constants"
import clsx from "clsx"
import "./Header.scss"

const Header: FC = () => {
  return (
    <div className={clsx("header", "border")}>
      <div className="logo">
        <Link to={path.PATH_BASE}>Job Portal</Link>
      </div>
      <div className="hamburger">
        <Hamburger />
        <div className="header-dropdown-wrapper">
          <div className={clsx("header-dropdown", "border")}>
            <ul>
              <li>
                <Link to={path.PATH_INBOX}>
                  Inbox
                  <span className="header-dropdown-count"> 24 </span>
                </Link>
              </li>
              <li>
                <Link to={path.PATH_JOBS_APPLIED}>Jobs Applied</Link>
              </li>
              <li>
                <Link to={path.PATH_PROFILE}>Profile</Link>
              </li>
              <li>
                <Link to={path.PATH_SETTINGS}>Settings</Link>
              </li>
              <li>
                <Link to={path.PATH_HELP}>Help</Link>
              </li>
              <li>
                <Link to={path.PATH_ABOUT}>About Portal</Link>
              </li>
              <li>
                <Link to={path.PATH_CONTACT_US}>Contact Us</Link>
              </li>
              <li>Signout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

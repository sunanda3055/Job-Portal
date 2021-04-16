import { FC } from "react"
import { Link } from "react-router-dom"
import * as path from "../../utils/constants"
import "./Footer.scss"

/**
 * Footer
 * Used By: App
 * Purpose: Displays the footer
 */

const Footer: FC = () => {
  return (
    <div className="footer">
      <ul>
        <li>&#169; 2021 Job Portal</li>
        <li>
          <Link to={path.PATH_TERMS}>Terms</Link>
        </li>
        <li>
          <Link to={path.PATH_COOKIES}>Cookies</Link>
        </li>
        <li>
          <Link to={path.PATH_PRIVACY}>Privacy</Link>
        </li>
        <li>
          <Link to={path.PATH_JOBS}>Jobs</Link>
        </li>
        <li>
          <Link to={path.PATH_FAQS}>FAQs</Link>
        </li>
        <li>
          <Link to={path.PATH_ABOUT}>About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer

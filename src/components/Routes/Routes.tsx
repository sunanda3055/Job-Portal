import { FC } from "react"
import Home from "../Home/Home"
import Inbox from "../InBox/InBox"
import About from "../About/About"
import Help from "../Help/Help"
import ContactUs from "../ContactUs/ContactUs"
import Profile from "../Profile/Profile"
import Settings from "../Settings/Settings"
import JobsApplied from "../JobsApplied/JobsApplied"
import JobsAtPortal from "../JobsAtPortal/JobsAtPortal"
import Terms from "../Terms/Terms"
import Cookies from "../Cookies/Cookies"
import Privacy from "../Privacy/Privacy"
import FAQs from "../FAQs/FAQs"
import ShowJob from "../ShowJob/ShowJob"
import NotFound from "../NotFound/NotFound"
import { Switch, Route, Redirect } from "react-router-dom"
import * as path from "../../utils/constants"

/**
 * Routes
 * Used By: App
 * Purpose: Router which decides which page to render based on path
 */

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path={path.PATH_BASE}>
        <Home />
      </Route>
      <Route path={path.PATH_INBOX}>
        <Inbox />
      </Route>
      <Route path={path.PATH_ABOUT}>
        <About />
      </Route>
      <Route path={path.PATH_PROFILE}>
        <Profile />
      </Route>
      <Route path={path.PATH_SETTINGS}>
        <Settings />
      </Route>
      <Route path={path.PATH_HELP}>
        <Help />
      </Route>
      <Route path={path.PATH_CONTACT_US}>
        <ContactUs />
      </Route>
      <Route path={path.PATH_JOBS_APPLIED}>
        <JobsApplied />
      </Route>
      <Route path={path.PATH_JOB}>
        <ShowJob />
      </Route>
      <Route path={path.PATH_JOBS}>
        <JobsAtPortal />
      </Route>
      <Route path={path.PATH_TERMS}>
        <Terms />
      </Route>
      <Route path={path.PATH_COOKIES}>
        <Cookies />
      </Route>
      <Route path={path.PATH_PRIVACY}>
        <Privacy />
      </Route>
      <Route path={path.PATH_FAQS}>
        <FAQs />
      </Route>
      <Route path={path.PATH_NOT_FOUND}>
        <NotFound />
      </Route>
      <Redirect to={path.PATH_BASE} />
    </Switch>
  )
}

export default Routes

import React from "react"
import "../LandingPageWelcome.css";
import "semantic-ui-css/semantic.min.css";
import LandingPageQuote from "./LandingPageQuote"


const LandingPage = () => {
//upper most parent for the other components (except doctors page)


  return(
    <div className="pusher">
      <div className="inverted vertical center aligned segment">
          <div className="logo-container">
            <img alt={"psych"} src={"logo.png"} />
          </div>
        </div>
        <LandingPageQuote />
    </div>
  )





}
export default LandingPage;

import React from "react"

import SEO from "../components/seo"
import Buttonback from "../components/buttonback"
import "./global-styles.css"


const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="fouroufour__wrapper">
    <img  className="fouroufour__image"
            src={require("../images/fouroufour.gif")}
            alt="404 image"
          />
      <div>
        <h1>four-ou-four</h1>
        <p>There’s nothing here...<br/>
      Sorry.
      </p> 
      <Buttonback />
      </div>
    </div>
    </>
)

export default NotFoundPage

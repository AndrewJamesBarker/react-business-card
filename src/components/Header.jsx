import React from "react"


export default function Header () {
  return (
    <div className="header-container">
    <img className="header-photo" src="/images/MePhotoSarahC.jpg" alt="portrait photo of andrew"></img>
    <h1 className="header-name">Andrew Barker</h1>
    <h2 className="header-sub">Fullstack Developer</h2>
    <a className="website-link" title="Andrews portfolio link" href="https://abarksbytes.com/">abarksbytes.com</a>
    <div className="button-container">
      <span><a href="https://www.linkedin.com/in/andrew-james-barker-/"><img src="./images/Button-linkedin.png" alt="linkedin button"/></a></span>
    </div>
  </div>
  )

}

import { navData } from "../lib/navData"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Sidenav = () => {

  const [open, setOpen] = useState(true)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={open ? "sidenav" : "sidenav-closed"}  >
      <button className="menuBtn" onClick={toggleOpen}>
        {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
      </button>
      {navData.map(item => {
        return <NavLink key={item.id} className="sideItem" to={item.link}>
          {item.icon}
          <span className={open ? "linkText" : "linkText-closed"}>{item.text}</span>
        </NavLink>
      })}
    </div>
  )
}

export default Sidenav;
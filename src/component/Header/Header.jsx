import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import logo from "../../assets/logo.svg"
import twitter from "../../assets/twitter.svg"
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom"

export const menu = ["Home", "Blog", "Contact", "About Us"];
const headerMenu = [
  {
    title: "Home",
    route: "/"
  },
  {
    title: "Blog",
    route: "/blog"
  },
  {
    title: "Contact",
    route: "/contact"
  },
  {
    title: "About Us",
    route: "/about-us"
  },
]

const Header = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <div>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.menu}>
            {headerMenu.map(m => (
              <NavLink key={m.title} to={m.route}>{m.title}</NavLink>
            ))}
          </div>
          <div className={styles.icons}>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
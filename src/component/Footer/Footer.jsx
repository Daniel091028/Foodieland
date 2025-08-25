import style from "./Footer.module.css"
import logo from "../../assets/logo.svg"
import { menu } from "../Header/Header"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"

const Footer = () => {
    return (
        <div className="container">
            <div className={style.footer}>
                <div className={style.footerStart}>
                    <div className={style.footerText}>
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                    </div>
                    <div className={style.footerMenu}>
                        <ul>
                            {menu.filter(m => m !== "Home").map(m => {
                                return <li key={m}>{m}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={style.footerEnd}>
                    <p>© 2020 Flowbase. Powered by <span className={style.orange}>Webflow</span></p>
                    <div>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
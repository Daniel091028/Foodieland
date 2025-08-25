import play from "../../assets/play.svg"
import timer from "../../assets/timer.svg"
import knife from "../../assets/knife.svg"
import hot from "../../assets/hot.svg"
import styles from './HomeBanner.module.css'
import hm from "../../assets/homeimage.png"
import Button from "../UI/Button/Button"
import avatar from "../../assets/avatar.svg"

const HomeBanner = () => {
  return (
    <div>
        <div className="front1"></div>
            <div className={styles.homeBanner}>
        <div className={styles.bannerText}>
            <div className={styles.hot}>
                <img src={hot} alt="" />
                <span>Hot Recipes</span>
            </div>
            <h1>Spicy delicious chicken wings</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <button> <img src={timer} alt="" />30 Minutes</button>
            <button> <img src={knife} alt="" />Chiken</button>
            <div className={styles.user}>
            <div className={styles.avatar}>
                <img src={avatar} alt="" />
                <div>
                    <h4>John Smith</h4>
                    <p>15 March 2022</p>
                </div>
            </div>
                <Button text="View Recipes ">
                    <img src={play} alt="" />
                </Button>
            </div>
        </div>
        <div className={styles.bannerImage}>
            <img src={hm} alt="" />
        </div>
    </div>
        <div className="front2"></div>
    </div>
  )
}

export default HomeBanner
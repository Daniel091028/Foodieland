import Button from "../UI/Button/Button"
import style from "./Chef.module.css"
import ChefImg from "../../assets/chef.png"

const Chef = () => {
  return (
    <div className="container">
        <div className={style.chef}>
        <div className={style.chefText}>
            <h2>Everyone can be a chef in their own kitchen</h2>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <Button text="Learn More"/>
        </div>
        <div className={style.chefImg}>
            <img src={ChefImg} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Chef
import { useState, useEffect } from "react"
import { apiCategories } from "../../service/categoriesApi"
import timer from "../../assets/timer.svg"
import knife from "../../assets/knife.svg"
import styles from "./Recipes.module.css"
import { Link, useNavigate } from "react-router-dom"

const defaulImg = "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"

const Recipes = (props) => {
  const [foods, setfoods] = useState([])
  // замыкание
  const navigate = useNavigate()

  const handleClick = (foodId) => {
    navigate(`/recipe/${foodId}`)
  }

  useEffect(() => {
    apiCategories.filterByCategory(props.category).then(data => setfoods(data))
  }, [props.category])

  if (foods.length === 0) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className={styles.wrap}>
      <h2>Simple and tasty recipe</h2>
      <p>Lorem ipsum dolor sit amet, consectetuipisicing elit,
        sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqut enim ad minim </p>
      <div className={styles.cards}>
        {foods.map((item) => (
          <div className={styles.card} onClick={() => {
            handleClick(item.idMeal)
          }}>
            <img loading="lazy" src={item.strMealThumb ?? defaulImg} alt="" />
            <div>
              <h4>{item.strMeal}</h4>
              <span><img src={timer} alt="" /> 30 minutes</span>
              <span><img src={knife} alt="" /> fish</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recipes

// ??  null or undefined
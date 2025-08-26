

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import style from "./RecipePage.module.css"
import { apiFood } from "../../service/foodApi"
import avatar from "../../assets/avatar.svg"
import timer from "../../assets/timer.svg"
import knife from "../../assets/knife.svg"
import Button from "../../component/UI/Button/Button"

const RecipePage = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})
  const navigate = useNavigate();

  const handleBack = () => {
    // navigate(-1)
    navigate("/")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    apiFood.getFoodRecipeById(id).then(data => setRecipe(data.meals[0]))
  }, [id])

  if (Object.keys(recipe).length === 0) {
    return <h2>Loading...</h2>
  }

  const youtubeUrl = recipe.strYoutube.replace("watch?v=", "embed/")
  return (
    <div className="container">
      <div style={{
        margin: "20px 0"
      }}>
        <Button text="Go back" onClick={handleBack} />
      </div>

      <h2>{recipe.strMeal}</h2>
      <div className={style.time}>
        <img src={avatar} alt="" />
        <div>
          <h4>John Smith</h4>
          <p>15 March 2022</p>
        </div>
        <hr />
        <img src={timer} alt="" />
        <div>
          <h4>PREP TIME</h4>
          <p>15 Minutes</p>
        </div>
        <hr />
        <img src={timer} alt="" />
        <div>
          <h4>COOK TIME</h4>
          <p>15 Minutes</p>
        </div>
        <hr />
        <div className={style.knife}>
          <img src={knife} alt="" />
          <p>Chicken</p>
        </div>
      </div>


      <iframe width="560" height="315" src={youtubeUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default RecipePage
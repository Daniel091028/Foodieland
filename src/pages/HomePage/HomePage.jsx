import { useState } from "react"
import Categories from "../../component/Categories/Categories"
import Chef from "../../component/Chef/Chef"
import HomeBanner from "../../component/HomeBanner/HomeBanner"
import Recipes from "../../component/Recipes/Recipes"
import "./HomePage.module.css"
//  shift + alt  + o

const HomePage = () => {
  const [category, setCategory] = useState("Beef")

  return (
    <div>
      <section className="container">
        <HomeBanner />
      </section>
      <section className="container">
        <Categories setCategory={setCategory} />
      </section>
      <section className="container">
        <Recipes category={category} />
      </section>
      <section>
        <Chef />
      </section>
    </div>
  )
}

export default HomePage
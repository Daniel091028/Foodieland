

import axios from "../axios"

class FoodApi {
    async getFoodRecipeById(id) {
        try {
            const { data } = await axios.get(`/lookup.php?i=${id}`)
            return data
        } catch (error) {
            console.log(error);
        }
    }
}

export const apiFood = new FoodApi()
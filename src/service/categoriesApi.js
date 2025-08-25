import axios from "../axios";

class CategoriesApi {
    async getCategories() {
        try {
            const response = await axios.get('/categories.php');
            return response.data.categories;
        }catch (error) {
            console.error('Error fetching categories:',error);
            throw error
        }
    }
    async filterByCategory(category) {
        try{
            const response = await axios.get(`/filter.php?c=${category}`);
            return response.data.meals;
        }catch (error) {
            console.error('Error fetching meals by category:',error);
            throw error;
        }
    }
} 
export const apiCategories = new CategoriesApi();

import Button from '../UI/Button/Button'
import styles from './Categories.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from 'react'
import "swiper/css";
import { apiCategories } from '../../service/categoriesApi';
const Categories = (props) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        apiCategories.getCategories().then(data => setCategories(data))
    }, [])


    if (categories.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div className={styles.categories}>
            <div className={styles.categoriesHeader}>
                <h2>
                    Categories
                </h2>
                <Button txtColor="black" bgColor="#E7FAFE" text="View All Categories" />
            </div>
            <div className={styles.cards}>
            <Swiper className="mySwiper" 
                slidesPerView={6}
                spaceBetween={40}
                onSlideChange={({activeIndex}) => {
                    console.log(categories[activeIndex]);
                    
                }}
            >
                {categories.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className={styles.card} onClick={() => {
                            console.log(item.strCategory);
                            props.setCategory(item.strCategory)
                        }}>   
                            <img src={item.strCategoryThumb} alt="" />
                            <h3>{item.strCategory}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    )
}
          
export default Categories
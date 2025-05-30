import styles from "./CategoriesCard.module.css";
import type { Category } from "../../assets/Interfaces";

import CategoryData from "./../../assets/categories.json";
import ButtonCard from "../buttons/buttonCard/ButtonCard";

const CategoryCard = () => {
    const categories: Category[] = CategoryData.map(item => ({
        id: item.id,
        name: item.name,
        icon: item.icon
    }));

    return (
        <>
            <div className={styles.categoryList}>
                {categories.map((category) => (
                    <ButtonCard id={category.id} 
                    icon={category.icon}
                    name={category.name}/>
                ))}
            </div>
        </>
    )
}

export default CategoryCard

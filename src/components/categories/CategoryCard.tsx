import styles from "./CategoriesCard.module.css";

interface Category {
    name: string;
    icon: string;
}

interface Props {
    values: Category[];
}

const CategoryCard = ({ values }: Props) => {
    return (
        <div className={styles.list}>
            {values.map((category) => (
                <button key={category.name}>
                    <i className={category.icon}></i>
                    <label htmlFor={category.name}>{category.name}</label>
                </button>
            ))}
        </div>
    )
}

export default CategoryCard

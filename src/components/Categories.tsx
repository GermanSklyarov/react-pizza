import React from "react";

type CategoriesProps = {
  activeIndex: number;
  onClick: (i: number) => void;
};

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ activeIndex, onClick }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((category, i) => (
            <li
              key={i}
              className={activeIndex === i ? "active" : ""}
              onClick={() => onClick(i)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
export default Categories;

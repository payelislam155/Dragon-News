import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() =>{
            fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(response => response.json())
            .then(data => setCategories(data.data.news_category))
    },[]);
    return (
      <div>
        <h1 className="font-semibold">All Category({categories.length})</h1>
        <div className="flex flex-col gap-4 py-4">
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.category_id}`}
              className="btn btn-primary"
              key={category.category_id}
            >
              {category.category_name}
            </NavLink>
          ))}
        </div>
      </div>
    );
};

export default LeftNavbar;
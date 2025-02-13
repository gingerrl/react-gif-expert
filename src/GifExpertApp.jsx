import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory.toLowerCase()]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(e) => onAddCategory(e)} />
      {/* setCategories={setCategories} */}

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
    </>
  );
};

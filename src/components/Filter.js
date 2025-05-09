import { useState } from "react";
function Filter({onCategoryChange}){
      const [category, setCategory] = useState("All");
   function handleCategoryChange(event){
    const newCategory = event.target.value
    setCategory(newCategory)
    onCategoryChange(newCategory)
    }
    return(
         <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    )
}
export default Filter
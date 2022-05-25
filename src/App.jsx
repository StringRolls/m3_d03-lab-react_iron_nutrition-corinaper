import AddFormFood from './components/AddFormFood.js';
import FoodBox from './components/FoodBox.js';

import {useState} from "react"

import foods from "./foods.json";
import Search from './components/Search.js';
import { Button } from 'antd';
import "./index.css"

const updatedArray = foods

function App() {
  const [foodsData, setFoodsData] = useState(foods);
  
  const deleteFood = (event)=>{
    const foodArray = [...foodsData]
    const filteredArray = foodArray.filter(food=>
      food.name !== (event.target.id))
    console.log(event.target.id)
    setFoodsData(filteredArray)
  }

  const addNewFood = (newFood) => {
    // const updatedFoodsData = [...foodsData, newFood];
    updatedArray.push(newFood)

    setFoodsData(updatedArray);
    
  };

  const filterFood = (input)=>{
    const foodArray = updatedArray
    const filteredArray = foodArray.filter(food=>
      food.name.toLowerCase().includes(input.search))
    console.log("filteredArray:", filteredArray, "input:",input.search)
    setFoodsData(filteredArray)
  }
  

  return (
    <div className="App">
    
    <AddFormFood
    addFood = {addNewFood}
    ></AddFormFood>
    
    <Search
    filterFood = {filterFood}
    ></Search>
    {foodsData.map((food, idx)=>
    
    <FoodBox key = {idx} food={food}>
      <button id={food.name} onClick={deleteFood}>Delete</button>
    </FoodBox>)
      }
      
    </div>
  );
}

export default App;

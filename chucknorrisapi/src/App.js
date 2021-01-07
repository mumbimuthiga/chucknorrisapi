
import './App.css';
import React, {useEffect ,useState} from 'react';
import Joke from './Joke';

const App=()=>{
  const[jokes ,setJoke]=useState('');
  const[category ,setCategory]=useState([])
  useEffect(()=>{
    getJokes()
    getCategories()
  } ,[])
  //Get the Jokes
  const getJokes=async()=>{
const response=await fetch('https://api.chucknorris.io/jokes/random');
const data=await response.json();
setJoke(data.value)
console.log(data.value);

  }
  //Get the Categories
  const getCategories=async()=>{
    const response=await fetch("https://api.chucknorris.io/jokes/categories");
    const data= await response.json();
    setCategory(data);
    console.log(data)
  }


  return(
   
    <div className="App">
    <h1>Chuck Norris API</h1>
    <form className="search-form">
    <input type="text" className="search-input"></input>
    <button type="submit" className="search-btn">Search</button>
    <p>{jokes}</p>
    <h1>Categories</h1>
    <div className="jokes-list">
    
    {category.map(category=>(
      <Joke
      
      category={category}
      >
      </Joke>
     
    ))}
    </div>
    </form>
   
      
    
    
    
  </div>
 
  )
}

export default App;

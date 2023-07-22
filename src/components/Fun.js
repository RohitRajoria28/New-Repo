import React from 'react'
import { useEffect,useState } from 'react'
const Fun = () => {
 const [Name,setName]=useState('');

//1.  first everyTime on updating state
 useEffect(()=>{
    console.log(`My name is ${Name}`);
 })

//2.  to do the operation only first time 
 useEffect(()=>{
    const getData=async ()=>{
        let data=await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1eaeccad34605b1432862ada2802ad35`);

        console.log(data);

    }
    getData();
 },[])
//  []-> dependency array 



 

  return (
    <div>
         <h3>What is your Name </h3>
         
         <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} />

    </div>
  )
}

export default Fun
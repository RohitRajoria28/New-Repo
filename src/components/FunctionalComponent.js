import React, { useEffect, useState } from 'react'

const FunctionalComponent = () => {
    const [name,setName]=useState('');
    const [increaseNum,setIncreaseNum]=useState(0);
    const [decresNum,setDecreaseNum]=useState(0);

  // 1. for Mounting and Updating of the Component
       
    useEffect(()=>{
      document.title=`you have clicked ${increaseNum} times`
    })
  //2. When you need to call Anything only 1st time .
  // API_URL=https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1eaeccad34605b1432862ada2802ad35
  
   useEffect(()=>{
      let getData=async ()=>{
        let data=await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1eaeccad34605b1432862ada2802ad35`)
        console.log(data);
      }
      getData()
   },[]);

  //  []-> it will only call the useEffect 1st time .

  //3. when you need to perform a operation on particular state update
  // when 2 or more state updates are performed

     useEffect(()=>{
        // alert(`You clicked me `);
     },[increaseNum,decresNum]);

  //4.UnMounting of the component / CleanUp operations
  // Ex. online and offline status updates, disconnect for current component 
     useEffect(()=>{
      console.log(`mounted`)
      return (
        // cleanup codes 
        console.log(`Unmounted`)
      )
     })
      

//  render -> state / props / mounting / -> umounted (return) ;
// provide code 
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  return (
    <div>
      <p>Here is the Demo App</p>
      <button
       onClick={(()=>{
        setIncreaseNum(increaseNum+1);
       })}
      >
        Increment Button : {increaseNum}
      </button>
      <br /> 
       <button
       onClick={(()=>{
        setDecreaseNum(decresNum-1);
       })}
      >
        descrement Button : {decresNum}
      </button>
    </div>
  );
}

export default FunctionalComponent
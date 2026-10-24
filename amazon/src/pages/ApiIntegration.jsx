import React, { useEffect, useState } from 'react'

const ApiIntegration = () => {

    const[count,setCount]= useState(0)
    const [recipes,setRecipes]= useState([])




    // fetch ('https://dummyjson.com/auth/login')
    // .then (res => res.json())
    // .then (data => console.log(data))
    // .catch (err => console.log(err))

    useEffect(()=>{
        fetch ("https://dummyjson.com/recipes")
        
        
        .then (res => res.json())
        .then (data => setRecipes(data.recipes))
        .catch (err => console.log (err))

    },[])

    console.log(recipes)



  return (





    <div style={{justifySelf:'center'}}>


    <h2 >API fetch</h2>
    
    <h1>{count}</h1>
    <button onClick = {()=> setCount(count+1)}>Update Count</button>


    {recipes.map((r)=>(  
        <div key = {r.id}>
            <h1>{r.name}</h1>
            <h2>{r.rating}</h2>
           
            </div>

    ))
        }

    </div>
  )
}

export default ApiIntegration

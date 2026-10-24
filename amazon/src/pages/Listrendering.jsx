// import React, { useState } from 'react'

// const Listrendering = () => {
//     const [ Islogin , setIslogin]=useState(false)
//   return (
//     <div style={{justifySelf:'center',textAlign : 'center',border:'5px solid red',height:200,width:200,backgroundColor:'lightblue'}}>

//       <h1>Login status</h1>

//       <h2>{Islogin? 'welcome user !':'please login'}</h2>

//       <button onClick={()=>setIslogin(!Islogin)}>{Islogin?'logout':'login'}</button>
//     </div>
//   )
// }

// export default Listrendering






// qusetion = (2)


// import React, { useState } from 'react'

// const Listrendering = () => {
//     const [show , setShow]=useState(false)
//   return (
//     <div style={{justifySelf:'center',border:"5px solid red",textAlign:'center',height:200,width:200,backgroundColor:'lightblue'}}>

//     <button onClick={()=>{setShow(!show)}}>{show?'hide message':'show message'}</button>
//     {show && <h2 style={{color:'blue'}}> hello react </h2>}

//     </div>
//   )
// }

// export default Listrendering





// question = (3)



// import React, { useState } from 'react'

// const Listrendering = () => {

//   const [mark, setMark] = useState(0)

//   const handelSubmit = (e) => {
//     e.preventDefault()
//   }
//   return (
//     <div style={{ justifySelf: 'center', border: "5px solid red", textAlign: 'center', height: 200, width: 200, backgroundColor: 'lightblue' }}>
//       <h1>student marks</h1>

//       <form onChange={handelSubmit}>
//         <input type="number"
//           placeholder='enter the number'
//           value={mark}
//           onChange={(e) => setMark(e.target.value)} />
//         <h2>{mark >= 40 ? 'pass' : 'fail'}</h2>

//       </form>

//     </div>
//   )
// }

// export default Listrendering







// Question = (4)

// import React, { useState } from 'react'

// const Listrendering = () => {

//   const [loading ,setLoading]= useState(false)
//   return (
//     <div style={{ justifySelf: 'center', border: "5px solid red", textAlign: 'center', height: 200, width: 200, backgroundColor: 'lightblue'}}>
//     <h1>{loading?'Data Loaded Successfully !':'loading.....'}</h1>
//     <button onClick={()=>{setLoading(!loading)}}>Load data</button>
      
//     </div>
//   )
// }

// export default Listrendering





// QUestion =(5)

// import React from 'react'

// const Listrendering = () => {
//   const student = ['karan','ishan','vinay','rohit','rohan']
  
  
//   return (
//     <div style={{ justifySelf: 'center', border: "5px solid red", textAlign: 'center', height: 300, width: 200, backgroundColor: 'lightblue'}}>
//       <h1>student name </h1>
//      { student.map((s) => (
//       <ul>
//         <li>{s}</li>
//         </ul>
//       ))
      
//       }
//     </div>
//   )
// }

// export default Listrendering





// question = (6)
// import React from 'react'

// const Listrendering = () => {

//  const products = [
//   {id : 1,name:"Laptop",price:50000 },
// {id :2,name : "Phone",price : 30000},
// {id :3,name : "Headphones",price : 3000},
// {id :4,name : "Mouse",price : 2000},
// {id :5,name : "Computer",price : 80000},]

//   return (
//     <div style={{ justifySelf: 'center', border: "5px solid red", textAlign: 'center', height: 1200, width: 230, backgroundColor:'lightpink'}}>

//       <h1>products details</h1>
//       { products.map((p) => (
//        <div key ={p.id}style={{height:200,width:230,
//                     backgroundColor:" yellow",}} >
        
//         <h2>NAME={p.name}</h2>
//         <h2>PRICE={p.price}</h2>
  
     
//     </div>
//     ))
//       }

//     </div>
//   )
// }

// export default Listrendering







//QUESTION = (7)
// import React from 'react'

// const Listrendering = () => {
//  const employees = [
//   {id:1,name:'karan',department:"IT"},
//  { id:2,name:'ishan',department:"Finance"},
//  { id:3,name:'rohan',department:"HR"},
//  { id:4,name:'vishal',department:"Teachar"},
//  { id:5,name:'kunal',department:"Sales"},
  
//  ]
//   return (
//     <div  style={{ justifySelf: 'center', border: "5px solid red", textAlign: 'center', height: 1200, width: 230, backgroundColor:'lightpink'}}>
//       <h1>employees details</h1>
//       {employees.map((e) =>
//     <div key = {e.id} style={{height:200,width:230,
//                     backgroundColor:" yellow",}} >
         

//       <h2>Employees ID = {e.id}</h2>
      
//       <h2>Name = {e.name}</h2>
//       <h2>Department= {e.department}</h2>


//       </div>

//     )}

      
//     </div>
//   )
// }

// export default Listrendering








// question = (8)

// import React from 'react'

// const Listrendering = () => {

//   const student = []

//   return (
//     <div  style={{ justifySelf: 'center', border: "5px solid red", textAlign: 'center', height: 200, width: 230, backgroundColor:'lightpink'}}>
//       <h1>student detsils</h1>
//       {student.length <=0 ? "No students available":(student.map((s) =>(
//         <h2>{s}</h2>

//       )
      
    
    
//     ))
//       }

      
//     </div>
//   )
// }

// export default Listrendering


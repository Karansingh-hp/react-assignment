// import React, { useState } from 'react'


// const App = () => {
//   const [name, setName] = useState()
//   const [email, setEmail] = useState()
//   const [course, setCourse] = useState("")


//   const handelSubmit = (e) => {
//     e.preventDefault()


//     if (!name) {
//       console.log("please aenter the name ")
//       setError("add this name")
//       return false
//     }

//     if (!email) {
//       console.log("email mandatroy")
//       return false
//     }

// if (!course) {
//       console.log("coures mandatroy")
//       return false
//     }


//   }



//   return (
//     <div style={{justifySelf:'center',border:"5px solid black",textAlign:'center',width:350}}>
//       <>

//         <form onSubmit={handelSubmit}>

// <label htmlFor="">Enter the FullName</label><br />
//           <input type="text" 
//             name="" id=""
//             value={name}
//             onChange={(e) => setName(e.target.value)}

//           />  <br /><br />

//             <label htmlFor="">Enter the Email</label><br />
//           <input
//             type="text" name=""
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             id=""
//           /><br /><br />
//           <label htmlFor="">Enter the Coures</label><br />
//           <input 
//           type="text" name=""
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//            id="" />
//           <br /><br />

//           <input
//             type="submit"
//             name="" id=""
//           />



//         </form>




// <h1>{name}</h1>
// <h1>{email}</h1> 
// <h1>{course}</h1>
//       </>



//     </div>
//   )
// }

// export default App







// OUESTION = (2)
import React,{useState} from 'react'

const App = () => {
  const [email,setEmail]=useState()
  const[password,setPassword]=useState()

  const handelSubmit = (e) => {
    e.preventDefault()
  
  
  }
  return (
    <div>
      
    </div>
  )
}

export default App
// import { useState } from "react";

// const Formhandling = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [course, setCourse] = useState("");

//   const [student, setStudent] = useState(null);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name==="" || !email ==="" || !course) {
//       setError("Please fill all fields");
//       return;
//     }

//     setStudent({
//       name: name,
//       email: email,
//       course: course,
//     });

//     setError("");

  
    
//   };

//   return (
//     <div style={{justifySelf:"center",border:"3px solid black", textAlign:"center"}}>
//       <h2>Student Registration Form</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//   <br /><br />
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
// <br /><br />
//         <select
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//         >
//           <option value="">Select Course</option>
//           <option value="React JS">React JS</option>
//           <option value="JavaScript">JavaScript</option>
//           <option value="Web Development">Web Development</option>
//         </select>
//     <br /><br />
//         <button type="submit">Submit</button>
//       </form>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {student && (
//         <div >
//           <h3>Submitted Student Details</h3>
//           <p><b>Full Name:</b> {student.name}</p>
//           <p><b>Email:</b> {student.email}</p>
//           <p><b>Course:</b> {student.course}</p>
//         </div>
//       )}
//     </div>
//   );
// }



// export default Formhandling









                 //////////////////// //           QUESTION (2)               ///////////////////////////////////////////////////////




// import  { useState } from 'react'


// const Formhandling = () => {

//  const[password,setPassword]=useState ("")
//  const[email,setEmail]=useState ("")
//  const[error,setError]=useState ("")
//  const [store , setStore]=useState("")
 
//  const handleSubmit = (e)=> {
//   e.preventDefault();
 


// if( password ==="" || email === ""){
//   setError("Please fill all fields")
//   setStore("")
//   return;
// }
//   setEmail("")
//   setStore("Login successful")

// setPassword("")
// setEmail("")

// setError('')

//  }

 


//   return (
//     <div style={{justifySelf:"center",border:"3px solid black", textAlign:"center"}}>

//      <h2>Student Registration Form</h2>

//     <form onSubmit={handleSubmit}>

//       <input type="email"
//       placeholder='Enter email'
//       value={email} 
//       onChange={(e)=> setEmail(e.target.value)}
//       />
//       <br /><br />
//       <input type="password"
//       placeholder='Enter password' 
//       value = {password}
//       onChange={(e)=>setPassword(e.target.value)}
//       />

// <br /><br />
// <button type="submit">Submit</button>


// </form>






//     {error && <p style={{color:'red'}}>{error}</p>} 
// {store && <h2>{store}</h2>}

//     </div>
//   )
// }
// export default Formhandling










/////////////////////////////////Question (3)//////////////////////////////////////

import React, { useState } from 'react'

const Formhandling = () => {

  const [name , setName]=useState()
  const [email , setEmail]=useState()
  const [message , setMessage]=useState()
  const [error , setError]=useState()
  const [content , setContent]=useState()


  const handleSubmit = (e) => {
     e.preventDefault();


     if(name === "" || email === "" || message === ""){
      setError("Please fill all fields")
      return;
     }

     setContent({
      name : name,
      email : email,
      message : message
     })

     setError("")

  }


  return (
    <div style={{justifySelf:"center",border:"3px solid black", textAlign:"center"}}>
      <h3>Submitted Student Details</h3>
      <form onSubmit={handleSubmit}>

      <input type="text"
      placeholder='Enter the name'
       value={name} 
       onChange={(e)=>setName(e.target.value)}
        />
        <br /><br />

        <input type="email"
      placeholder='Enter the email'
       value={email} 
       onChange={(e)=>setEmail(e.target.value)}
/>
<br /><br />

        <input type="message"
      placeholder='Enter the message'
       value={message} 
       onChange={(e)=>setMessage(e.target.value)}
/>
<br /><br />
 <button type='submit'>Login</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
      {content &&  <div >
           <h3>Submitted Student Details</h3>
           <p><b>Full Name:</b> {content.name}</p>
           <p><b>Email:</b> {content.email}</p>
           <p><b>Message:</b> {content.message}</p>
         </div>}
    </div>
  )
}

export default Formhandling

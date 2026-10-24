// import React from "react";

// const App = () => (
//   <div>
//   <div style={{ fontFamily: "Arial", color: "#101820" }}>

    
//     <nav style={{backgroundColor: "#101820",color: "white",padding: "18px 8%",display: "flex",justifyContent: "space-between",alignItems: "center",}}>
//       <h2 style={{ margin: 0 }}>
//         <img style={{height:50,width:70,borderRadius:50}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_Zsap8YyAi5shFrgAjnWfQVx6Mi0lwgROnYL9_eZmQ&s=10" alt="" />
//          Drive<span style={{ color: "#ff2638" }}>Pro</span>
//       </h2>

//       <div style={{ display: "flex", gap: "22px", }}>
//         <a href="#home" style={{ color: "#ff2638", textDecoration: "none" }}>Home</a>
//         <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
//         <a href="#cars" style={{ color: "white", textDecoration: "none" }}>Cars</a>
//         <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
//       </div>
//     </nav>

    
//     <section id="home" style={{padding: "70px 8%",color: "white",backgroundColor: "#263746",backgroundImage: "linear-gradient(90deg, #101820, #263746)",textAlign: "left"}}>
//       <p style={{ color: "#ff2638", fontWeight: "bold" }}>DRIVE YOUR DREAM</p>

//       <h1 style={{ fontSize: "45px", margin: "10px 0" }}>
//         Find Your Perfect<br />
//         <span style={{ color: "#ff2638" }}>Car Today</span>
//       </h1>

//       <p style={{ lineHeight: "1.8", maxWidth: "450px" }}>
//         Explore our wide range of premium cars designed for
//         your comfort, style and performance.
//       </p>

//       <a href="#cars" style={{ textDecoration: "none" }}>
//         <button style={{backgroundColor: "#ff2638",color: "white",border: "none",borderRadius: "25px",padding: "13px 25px",}}>
//           Explore Cars 
//         </button>
//       </a>

//       <img
//         src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
//         alt=""
//         style={{width: "100%",maxWidth: "700px",height: "350px",objectFit: "cover",borderRadius: "12px",marginTop: "25px"}}
//       />
//     </section>

  
//     <section id="about" style={{padding: "50px 8%",textAlign: "center",backgroundColor: "white"}}>
//       <p style={{ color: "#ff2638", fontWeight: "bold" }}>ABOUT US</p>

//       <h2>Your Trusted Car Partner</h2>

//       <p style={{ maxWidth: "700px", margin: "15px auto",lineHeight: "1.8",color: "#475569"}}>
//         At DrivePro, we believe that a car is more than just a vehicle.
//         We offer premium cars, trusted service and a smooth buying
//         experience to help you find your perfect ride.
//       </p>

//       <img
//         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_TYJNkBgG1fMX9IalQ7olf5DbxYJRtiCfgY7ZLTq-aQ&s=10'
//         alt="Car showroom"
//         style={{width: "100%",maxWidth: "600px",height: "250px",objectFit: "cover",borderRadius: "12px"}}
//       />

//       <br /><br />

//       <button style={{backgroundColor: "#ff2638",color: "white",border: "none",padding: "12px 25px",borderRadius: "25px",}}>
//         Learn More 
//       </button>
//     </section>

    
//     <section id="cars" style={{padding: "50px 8%",backgroundColor: "#f0f5fa",textAlign: "center"}}>
//       <p style={{ color: "#ff2638", fontWeight: "bold" }}>FEATURED CARS</p>

//       <h2 style={{ fontSize: "30px" }}>Popular Models</h2>

//       <p>Discover our most loved cars, built for every journey.</p>

//       <div style={{display: "flex",justifyContent: "center",gap: "25px",marginTop: "30px"}}>

        
//         <div style={{backgroundColor: "white",borderRadius: "12px",width: "280px",padding: "15px",boxShadow: "0 4px 12px #d1d5db",boxSizing: "border-box"}}>
//           <img
//             src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600"
//             alt=""
//             style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px" }}
//           />
//           <h3>BMW 3 Series</h3>
//           <p style={{ color: "#64748b", fontSize: "13px" }}>Luxury | Performance | Style</p>
//           <h3 style={{ color: "#ff2638" }}>₹55,00,000</h3>
//           <button style={{backgroundColor: "#101820",color: "white",border: "none",borderRadius: "20px",padding: "10px 18px", }}>View Details </button>
//         </div>

        
//         <div style={{backgroundColor: "white",borderRadius: "12px",width: "280px",padding: "15px",boxShadow: "0 4px 12px #d1d5db",boxSizing: "border-box"}}>
//           <img
//             src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600"
//             alt=""
//             style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px" }}
//           />
//           <h3>Mercedes C-Class</h3>
//           <p style={{ color: "#64748b", fontSize: "13px" }}>Elegance | Comfort | Technology</p>
//           <h3 style={{ color: "#ff2638" }}>₹58,00,000</h3>
//           <button style={{backgroundColor: "#101820",color: "white",border: "none",borderRadius: "20px",padding: "10px 18px",}}>View Details </button>
//         </div>

        
//         <div style={{backgroundColor: "white",borderRadius: "12px",width: "280px",padding: "15px",boxShadow: "0 4px 12px #d1d5db",boxSizing: "border-box"}}>
//           <img
//             src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600"
//             alt=""
//             style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px" }}
//           />
//           <h3>Audi Q5</h3>
//           <p style={{ color: "#64748b", fontSize: "13px" }}>Power | Space | Adventure</p>
//           <h3 style={{ color: "#ff2638" }}>₹62,00,000</h3>
//           <button style={{backgroundColor: "#101820",color: "white",border: "none",borderRadius: "20px",padding: "10px 18px",}}>View Details </button>
//         </div>

//       </div>
//     </section>

    
//     <section style={{padding: "45px 8%",textAlign: "center",backgroundColor: "white"}}>
//       <p style={{ color: "#ff2638", fontWeight: "bold" }}>WHY CHOOSE US</p>

//       <h2>What Makes Us Different</h2>

//       <div style={{display: "flex",justifyContent: "space-around",gap: "25px"}}>
//         <div style={{ width: "180px" }}>
//           <h2></h2>
//           <h3>Trusted Brand</h3>
//           <p>Years of experience in the automotive industry.</p>
//         </div>

//         <div style={{ width: "180px" }}>
//           <h2></h2>
//           <h3>Best Prices</h3>
//           <p>Get the best deals and value for your money.</p>
//         </div>

//         <div style={{ width: "180px" }}>
//           <h2></h2>
//           <h3>24/7 Support</h3>
//           <p>We are always here to help you.</p>
//         </div>

//         <div style={{ width: "180px" }}>
//           <h2></h2>
//           <h3>Wide Selection</h3>
//           <p>Choose from a variety of car models.</p>
//         </div>
//       </div>
//     </section>

    
//     <footer id="contact" style={{backgroundColor: "#101820",color: "white",padding: "35px 8%",textAlign: "center"}}>
//       <h2> Drive<span style={{ color: "#ff2638" }}>Pro</span></h2>

//       <p>Better Cars. Happier Journeys.</p>

//       <p>
//         Email: <a href="mailto:info@drivepro.com" style={{ color: "#ff5366" }}>
//           info@drivepro.com
//         </a>
//       </p>

//       <p>Instagram | Facebook | YouTube | LinkedIn</p>

//       <hr style={{ borderColor: "#34404c" }} />

//       <p style={{ fontSize: "13px", color: "#cbd5e1" }}>
//          2026 DrivePro. All Rights Reserved.
//       </p>
//     </footer>

//   </div>
//   </div>
// );

// export default App








Formhandling //
import React from 'react'
import Formhandling from './pages/Formhandling'
const App = () => {
  return (
    <div>
      <Formhandling/>
    </div>
  )
}

export default App





// import React from 'react'
// import Lifecycle from './pages/Lifecycle'
// const App = () => {
//   return (
//     <div>
//       <Lifecycle/>
//     </div>
//   )
// }

// export default App







//  Listrendering //

// import React from 'react'
// import Listrendering from './Component/Listrendering'
// const App = () => {
  
//   return (
//     <div>
// <Listrendering/>

//     </div>
//   )
// }

// export default App




// import React from 'react'
// import ApiIntegration from './pages/ApiIntegration'
// const App = () => {
//   return (
//     <ApiIntegration/>
//   )
// }

// export default App

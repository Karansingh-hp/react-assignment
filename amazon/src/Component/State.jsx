//Q1. Counter Application//
// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div >
//       <h2>Q1. Counter Application</h2>

//       <h1 >{count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increment +
//       </button>

//       <button onClick={() => setCount(count - 1)}>
//         Decrement -
//       </button>

//       <button onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default Counter;





// Q2. Show & Hide Password
// import { useState } from "react";

// function PasswordToggle() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");

//   return (
//     <div >
//       <h2>Q2. Show & Hide Password</h2>

//       <input
//         type={showPassword ? "text" : "password"}
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={() => setShowPassword(!showPassword)}>
//         {showPassword ? "Hide Password" : "Show Password"}
//       </button>
//     </div>
//   );
// }

// export default PasswordToggle;







// import { useState } from "react";

// function LoginLogout() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       <h2>Q4. Login & Logout System</h2>

//       {isLoggedIn ? (
//         <>
//           <h3>Welcome to React Website!</h3>
//           <p>You are successfully logged in.</p>

//           <button onClick={() => setIsLoggedIn(false)}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <>
//           <p>Please log in to continue.</p>

//           <button onClick={() => setIsLoggedIn(true)}>
//             Login
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default LoginLogout













// import react from "react";

// function ShowHideContent() {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <div className="task-card">
//       <h2>Q5. Show & Hide Content</h2>

//       <h3>About React.js</h3>

//       <button onClick={() => setShowDetails(!showDetails)}>
//         {showDetails ? "Hide Details" : "Show Details"}
//       </button>

//       {showDetails && (
//         <p>
//           React.js is a JavaScript library used to build
//           interactive user interfaces. It uses components
//           to create reusable parts of a website.
//         </p>
//       )}
//     </div>
//   );
// }

// export default ShowHideContent






import { React, useState } from "react";
// import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {Weguide} from "../../pages/weGuide";

// export default function SignUp({ setAuthState }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpass, setConfirmpass] = useState("");

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (!name || !email || !password || !confirmpass)
//       return alert("Field is empty.");

//     const user = { name, email, password, confirmPassword: confirmpass };

//     try {
//       const res = await fetch("http://localhost:4000/api/v1/signup", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: {
//           "Content-Type": "application/json",
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         // credentials: "include",
//       });
//       const data = await res.json();
//       console.log(data);
//       if (data.status === "success") {
//         alert("Sign Up Successfully");

        
//        window.setTimeout(() => {
//           // location.assign("/weguide")
//           window.location.assign("/weguide")
//         }, 2000);
//       }
//     } catch (error) {
//       console.log(error);
//       alert(error.message);
//     }
//   }
//   return (
//     <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//       <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
//         <form onSubmit={handleSubmit}>
//           <h1 className="mb-8 text-4xl font-semibold text-center">Sign up</h1>
//           <input
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             className="block border border-grey-light w-full p-3 rounded mb-4"
//             // name="fullnam"
//             placeholder="Full Name"
//           />

//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="text"
//             className="block border border-grey-light w-full p-3 rounded mb-4"
//             // name="email"
//             placeholder="Email"
//           />

//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             className="block border border-grey-light w-full p-3 rounded mb-4"
//             // name="password"
//             placeholder="Password"
//           />
//           <input
//             onChange={(e) => setConfirmpass(e.target.value)}
//             type="password"
//             className="block border border-grey-light w-full p-3 rounded mb-4"
//             // name="confirm_password"
//             placeholder="Confirm Password"
//           />

//           <button
//             // type="submit"
//             className="w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-1"
//           >
//             Create Account
//           </button>
//         </form>

//         <div className="text-center text-sm text-grey-dark mt-4">
//           By signing up, you agree to the Terms of Service and Privacy Policy
//         </div>
//       </div>

//       <div className="text-gray-300 mt-6">
//         Already have an account?
//         <button
//           className="no-underline border-b border-blue text-blue font-semibold cursor-pointer"
//           onClick={() => setAuthState("login")}
//         >
//           Log in
//         </button>
        
//       </div>
//     </div>
//   );
// }



export default function SignUp({ setAuthState }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    const user = { name, email, password, confirmPassword };

    try {
      const res = await fetch("http://localhost:4000/api/v1/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        alert("Sign Up Successfully");
        window.location.replace("/login");
        // Redirect to another page after successful sign-up
        // window.setTimeout(() => {
        //   window.location.assign("/weguide")
        // }, 2000);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-8 text-4xl font-semibold text-center">Sign up</h1>

          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Full Name"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Password"
          />

          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-1">
            Create Account
          </button>
        </form>

        <div className="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the Terms of Service and Privacy Policy
        </div>
      </div>

      <div className="text-gray-300 mt-6">
        Already have an account?
        <button
          className="no-underline border-b border-blue text-blue font-semibold cursor-pointer"
          onClick={() => setAuthState("login")}>
          Log in
        </button>
      </div>
    </div>
  );
}




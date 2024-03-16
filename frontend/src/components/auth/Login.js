import {React,useState} from 'react'

// export default function Login({ setAuthState }) {

//     const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function handleLogin(e) {
//     e.preventDefault();

//     if (!email || !password) return alert("Field is empty");

//     try {
//       const res = await fetch("http://localhost:4000/api/v1/login", {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       const data = await res.json();
//       console.log(data);
//       if (data.status === "success") {
//         alert("Login Successfully");

//         // window.setTimeout(() => {
//         //   location.assign("/me");
//         // }, 1500);
//       }
//     } catch (error) {
//       console.log(error);
//       alert(error.message);
//     }
//     }
//     return (
//         <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//             <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
//                 <form onLogin={handleLogin}>
//                     <h1 className="mb-8 text-4xl font-semibold text-center">Log in</h1>

//                     <div className='flex flex-col space-y-4 my-16'>
//                         <input
//                         onChange={(e) => setEmail(e.target.value)}
//                             type="text"
//                             className="block border border-grey-light w-full p-3 rounded mb-4"
//                             // name="email"
//                             placeholder="Email" />

//                         <input
//                         onChange={(e) => setPassword(e.target.value)}
//                             type="password"
//                             className="block border border-grey-light w-full p-3 rounded mb-4"
//                             // name="password"
//                             placeholder="Password" />
//                         <a
//                             href="weguide"
//                             type="submit"
//                             className=" relative top-6 w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-6">Login
//                         </a>
//                     </div>


//                 </form>

//                 <div className="text-center text-sm text-grey-dark mt-4">
//                     By signing up, you agree to the Terms of Service and Privacy Policy
//                 </div>
//             </div>

//             <div className="text-gray-300 mt-6">
//                 Don't have an account?
//                 <button
//                     className="no-underline border-b border-blue text-blue font-semibold cursor-pointer"
//                     onClick={() => setAuthState('signup')}>Sign up</button>.
//             </div>
//         </div>
//     )
// }



export default function Login({ setAuthState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/v1/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        alert("Login Successfully");
        window.location.replace("/Weguide");
        // Redirect to another page
        // window.setTimeout(() => {
        //   location.assign("/me");
        // }, 1500);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
        <form onSubmit={handleLogin}>
          <h1 className="mb-8 text-4xl font-semibold text-center">Log in</h1>

          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

          <div className='flex flex-col space-y-4 my-16'>
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
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-6">
              Login
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the Terms of Service and Privacy Policy
        </div>
      </div>

      <div className="text-gray-300 mt-6">
        Don't have an account?
        <button
          className="no-underline border-b border-blue text-blue font-semibold cursor-pointer"
          onClick={() => setAuthState('signup')}>
          Sign up
        </button>.
      </div>
    </div>
  )
}



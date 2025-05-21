// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../auth/AuthProvider";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login }:any = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     login({ email }); // Simulate authentication
//     navigate("/client"); // Redirect after login
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 w-full mb-2"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 w-full mb-4"
//         />
//         <button className="bg-blue-500 text-white p-2 w-full rounded" type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;







import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login }:any  = useAuth();
  const navigate = useNavigate();

  // const handleLogin = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   setIsLoading(true);
    
  //   // Simulate authentication with a slight delay for better UX
  //   setTimeout(() => {
  //     login({ email });
  //     setIsLoading(false);
  //     navigate("/client");
  //   }, 800);
  // };



  const handleLogin = async (e: { preventDefault: () => void }) => {
  e.preventDefault();
  setIsLoading(true);

try {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/api/user/login`,
    { email, password }, // Pass data directly, no need to stringify
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Handle success
  login(response.data); // Assuming login() saves token or user data
  navigate("/client");

} catch (error: any) {
  console.error("Login error:", error.response?.data?.message || error.message);
  alert(error.response?.data?.message || "Login failed");
} finally {
  setIsLoading(false);
}

};


  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center">
          <div className="mb-4">
            <div className="w-12 h-12 mx-auto bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              🛍️
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">Sign in to ShopEase</h1>
          <p className="text-sm text-slate-500 mt-1">Access your dashboard & manage orders</p>
        </div>
  
        {/* Form */}
        <div className="px-8 pb-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-100 border border-slate-300 text-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
  
            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <a href="#" className="text-sm text-emerald-600 hover:underline">
                  Forgot?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-100 border border-slate-300 text-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition duration-200 flex items-center justify-center ${
                isLoading ? "opacity-80" : ""
              }`}
            >
              {isLoading && (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              )}
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  
  );
};

export default Login;




import { useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate();
    return (
        <>
        <div>
      <div className="inset-0 min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center relative overflow-hidden text-white font-sans">
        {/* Colorful Circles */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-[#304ffe]/30 rounded-full blur-3xl"></div>
        <div className="absolute top-16 right-16 w-40 h-40 bg-[#3f51b5]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-1/3 w-40 h-40 bg-[#f50057]/20 rounded-full blur-2xl"></div>

        {/* Login Card */}
        <div className="bg-[#0f172a] rounded-xl p-8 w-full max-w-sm shadow-xl border border-[#334155]/20 z-10">
          {/* Header */}
          <h2 className="text-2xl font-semibold mb-1 text-center">Welcome Back</h2>
          <p className="text-sm text-center text-gray-400 mb-6">Enter your credentials to access VidyaSetu</p>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-300">Email or Username</label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="w-full px-3 py-2 rounded bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-sm"
            />
          </div>

          {/* Password Input */}
          <div className="mb-2">
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded bg-[#1e293b] border border-[#334155] focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-sm"
            />
          </div>

          {/* Login Button */}
          <button className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded mb-4 mt-3">
            <i className="fas fa-sign-in-alt mr-2"></i>Login
          </button>

          {/* Divider */}
          <div className="text-center text-gray-400 text-sm mb-4">or continue with</div>

          {/* OAuth Buttons */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 bg-[#1f2937] hover:bg-[#374151] text-white py-2 rounded text-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
          </div>

          <p className="mt-6 text-sm text-center text-gray-400">
            Don’t have an account?
            <button
              className="text-[#38bdf8] hover:underline ml-1 bg-transparent border-none outline-none cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Create one here
            </button>
          </p>
        </div>

        {/* ...existing code... */}
      </div>
    </div>
        </>
    )
}

export default Login

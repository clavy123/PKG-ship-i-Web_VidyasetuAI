import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ICONS } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../store/slices/auth.slice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    const resultAction = await dispatch(signupUser(payload));
    if (signupUser.fulfilled.match(resultAction)) {
      toast.success("Signup successful!");
      reset();
      navigate("/");
    } else if (resultAction.payload) {
      toast.error(resultAction.payload);
    } else {
      toast.error("Signup failed");
    }
  };

  return (
    <>
      <div>
        <div className="inset-0 min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center relative overflow-hidden text-white font-sans">
          {/* Colorful Circles */}
          <div className="absolute top-10 left-10 w-48 h-48 bg-[#304ffe]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-16 right-16 w-40 h-40 bg-[#3f51b5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 left-1/3 w-40 h-40 bg-[#f50057]/20 rounded-full blur-2xl"></div>

          {/* Signup Card */}
          <form
            className="bg-[#0f172a] rounded-xl p-8 w-full max-w-sm shadow-xl border border-[#334155]/20 z-10"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h2 className="text-2xl font-semibold mb-1 text-center">
              Create Account
            </h2>
            <p className="text-sm text-center text-gray-400 mb-6">
              Join VidyaSetu and start your journey
            </p>

            {/* First Name Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-300">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className={`w-full px-3 py-2 rounded bg-[#1e293b] border ${
                  errors.firstName ? "border-red-500" : "border-[#334155]"
                } focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-sm`}
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                })}
              />
              {errors.firstName && (
                <span className="text-xs text-red-400">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            {/* Last Name Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-300">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className={`w-full px-3 py-2 rounded bg-[#1e293b] border ${
                  errors.lastName ? "border-red-500" : "border-[#334155]"
                } focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-sm`}
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                })}
              />
              {errors.lastName && (
                <span className="text-xs text-red-400">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-300">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email or username"
                className={`w-full px-3 py-2 rounded bg-[#1e293b] border ${
                  errors.email ? "border-red-500" : "border-[#334155]"
                } focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-sm`}
                {...register("email", {
                  required: "Email is required",
                  validate: (value) =>
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ||
                    "Enter a valid email",
                })}
              />
              {errors.email && (
                <span className="text-xs text-red-400">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-2">
              <label className="block mb-1 text-sm text-gray-300">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full px-3 py-2 rounded bg-[#1e293b] border ${
                    errors.password ? "border-red-500" : "border-[#334155]"
                  } focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-sm pr-10`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <ICONS.IconEye /> : <ICONS.IconEyeOff />}
                </button>
              </div>
              {errors.password && (
                <span className="text-xs text-red-400">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded mb-4 mt-5 disabled:opacity-60 flex items-center justify-center gap-2"
              disabled={isSubmitting || loading}
            >
              <i className="fas fa-sign-in-alt mr-2"></i>
              <span>Sign Up</span>
              {loading && (
                <span className="ml-2 flex items-center">
                  <Loader />
                </span>
              )}
            </button>

            <p className="mt-6 text-sm text-center text-gray-400">
              Already have an account?
              <button
                type="button"
                className="text-[#38bdf8] hover:underline ml-1 bg-transparent border-none outline-none cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login here
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

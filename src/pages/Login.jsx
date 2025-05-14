import React from "react";
import loginbg from "../assets/portal_login-bg__sp.png";
import logo from "../assets/logo-footer.svg";
import NavWIthoutLinks from "../components/shared/navWIthoutLinks";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../store/features/auth/api";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
      navigate("/chat");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div>
      <NavWIthoutLinks />
      <div className="  grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="flex justify-center items-center container p-4">
          <div className="bg-white md:bg-gray-100 p-8 rounded-lg">
            <h2 className="font-bold text-3xl text-emerald-600 mb-2">Login</h2>
            <p className="text-gray-500 text-xl">
              Log in to access your Safeport Law portal
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-4 my-4 "
              />
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-lg w-full p-4 "
                />

                <span className="absolute text-gray-600 w-5 h-5 right-4 top-1/2 transform -translate-y-1/2  2">
                  {!showPassword ? (
                    <LuEyeClosed
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <LuEye onClick={() => setShowPassword(!showPassword)} />
                  )}
                </span>
              </div>

              <p className="mt-2 mb-12">Forgot Password?</p>
              <button className="btn btn-secondary w-full">Login</button>
            </form>
            <p className="text-center mt-4">
              Don&#8217;t have an account?{" "}
              <span
                className=" font-bold cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Create account now
              </span>
            </p>
          </div>
        </div>

        <div className="hidden md:block relative h-[100vh]">
          <img src={loginbg} alt="logoin background image " />
          <div className="absolute bg-black inset-0 opacity-50"></div>
          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="font-bold text-4xl text-white mb-2">
              With real attorneys on your side, you’re in good hands.
            </h2>
            <p className="text-xs text-white">
              At Safeport Law, we have a team of attorneys who are dedicated to
              helping you.
            </p>
            <img src={logo} alt="logo" className="w-48 mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

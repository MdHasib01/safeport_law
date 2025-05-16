import React from "react";
import loginbg from "../assets/portal_login-bg__sp.png";
import logo from "../assets/logo-footer.svg";
import NavWIthoutLinks from "../components/shared/navWIthoutLinks";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useNavigate } from "react-router";
import { signup } from "../store/features/auth/api";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const selectedEmail = useSelector(
    (state) => state.registration.personalInfo.email
  );
  console.log(selectedEmail);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        signup({ email: email || selectedEmail, password })
      ).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <NavWIthoutLinks />
      <div className="  grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="flex justify-center items-center container p-4">
          <div className="bg-white md:bg-gray-100 p-8 rounded-lg">
            <h2 className="font-bold text-4xl max-w-sm text-emerald-600 mb-2">
              Let&#8217;s set up your account!
            </h2>
            <p className="text-xl max-w-md text-gray-500">
              Enter your information below and we&#8217;ll send a verification
              link to the email address your provide.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                required
                value={email || selectedEmail}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg w-full p-4 my-4 "
              />
              <div className="relative mb-4">
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
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
              <div className="relative mb-4">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
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

              <button className="btn btn-secondary w-full mt-8">Sign Up</button>
            </form>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <span
                className=" font-bold cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
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

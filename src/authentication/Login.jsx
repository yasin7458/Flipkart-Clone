
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaShoppingBag, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaShieldAlt } from "react-icons/fa";

import validation from "../utils/validation";
import { checkLogin } from "../utils/authservice";
import { loginSuccess } from "../redux/actions/authActions";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {

    e.preventDefault();

    //validation.js file mathi aavta function mate

    let validationErrors = validation(email, password);
    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
      checkLogin(email, password).then(
        (user) => {
          if (user !== null) {
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(loginSuccess(user));
            navigate("/");
          }
        }
      );
    }
  }

  return (
    <div className="login-page container-fluid">
      <div className="row min-vh-100">

        <div className="col-lg-6 login-left d-flex flex-column justify-content-between p-4 p-md-5">
          <div className="login-brand">
            <FaShoppingBag className="brand-icon" />
            <span>ShopKart</span>
          </div>

          <div className="login-banner-content">
            <span className="login-tagline"> YOUR EVERYDAY SHOPPING PARTNER </span>
            <h1> Everything you love, <br /> all in one place. </h1>
            <p> Discover great products and enjoy a simple, convenient shopping experience. </p>
            <div className="login-feature"> <FaShieldAlt /> <span>Simple and secure sign in</span> </div>
          </div>

          <p className="login-copyright">© 2026 ShopKart. All rights reserved.</p>
        </div>

        <div className="col-lg-6 login-right d-flex align-items-center justify-content-center p-4 p-md-5">
          <div className="login-form-container w-100">

            <div className="login-heading">
              <span className="login-welcome">WELCOME BACK</span>
              <h2>Sign in to your account</h2>
              <p>Enter your details to continue shopping.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label">Email address</label>

                <div className="input-group login-input-group">
                  <span className="input-group-text"> <FaEnvelope /> </span>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {errors.email && (
                  <p className="text-danger small mt-2 mb-0"> {errors.email} </p>
                )}

              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>

                <div className="input-group login-input-group">
                  <span className="input-group-text"><FaLock /></span>

                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="input-group-text password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-danger small mt-2 mb-0">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn login-submit-btn w-100 mt-4"
              > Sign In <FaArrowRight />
              </button>
            </form>

            <div className="login-security-note mt-4">
              <FaShieldAlt /> <span> Your account information is handled by this app. </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
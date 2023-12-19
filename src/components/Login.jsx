import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./Store/loginSlice";
import { useNavigate } from "react-router-dom";

const inititalState = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState(inititalState);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const { email, password } = data;

  function handle(e) {
    e.preventDefault();
    if (email === "" || password === "") return;
    dispath(login(data));
    navigate("/profile");
    console.log(data);
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form className="login-form" onSubmit={handle}>
        <div className="circles">
          <div className="circle circle1">X</div>
          <div className="circle circle2">G</div>
          <div className="circle circle3">f</div>
        </div>
        <div className="center">
          <div className="line"></div>
          <div>or</div>
          <div className="line"></div>
        </div>
        <div className="input-fields">
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password"> </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" id="submit">
            LOGIN
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;

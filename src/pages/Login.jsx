import InputField from "../components/Input";

const Login = () => {
  return (
    <div className=" d-flex justify-content-center  ">
      <div className="input-area ">
        <InputField
          text={"Enter Username"}
          type={"email"}
          id={"exampleInputEmail1"}
          placeholder={"UserName"}
        />
        <InputField
          text={"Enter Password"}
          type={"password"}
          id="exampleInputPassword1"
          placeholder={"Password"}
        />
        <div className="d-flex justify-content-center ">
          <button type="button" className="btn btn-primary" id="login-button">
            Login
          </button>
        </div>
        <footer className="d-flex justify-content-around mt-3">
          <h4>New here?</h4>
          <a
            href=""
            className="link-primary link-opacity-100 link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover"
          >
            Signup
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Login;

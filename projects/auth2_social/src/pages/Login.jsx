import "./Login.css";

export default function Login() {
  return (
    <>
      <h2 className="heading">Login to my web</h2>
      <div className="wrapper displayP">
        <div className="left displayP">
          <div className="loginBtn googleBtn">Google</div>
          <div className="loginBtn facebookBtn">facebook</div>
          <div className="loginBtn githubBtn">Github</div>
        </div>
        <div className="center">
          {/* <div className="line" /> */}
          <div className="or">OR</div>
        </div>
        <div className="right displayP">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Log-in</button>
        </div>
      </div>
    </>
  );
}

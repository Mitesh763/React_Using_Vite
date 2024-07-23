import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CounterDisplay from "./components/CounterDisplay";
import CounterBtn from "./components/CounerBtn";
import CounterBoundry from "./components/CounterBoundry";
import { useSelector } from "react-redux";
import PrivasyMsg from "./components/PrivasyMsg";

function App() {
  const privacyToo = useSelector((store) => store.privacyToggle);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <CounterBoundry>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacyToo ? <PrivasyMsg /> : <CounterDisplay />}
            <CounterBtn />
          </div>
        </CounterBoundry>
      </div>
    </>
  );
}

export default App;

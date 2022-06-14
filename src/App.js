import React from "react";
import "./fonts/Gilroy/styles.css";
import "./App.less";
import LaunchPage from "./components/pages/Launch";
import {useSelector} from "react-redux";
import SliderHoc from "./hoc/Slider";
import {Route, Routes} from "react-router";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Account from "./components/pages/Account";
import Cart from "./components/pages/Cart";
import MobileFooter from "./components/molecules/MobileFooter";
/**
 * App component
 * @return {any}
 */
function App() {
  getComputedStyle(document.documentElement).getPropertyValue("--sat");
  const {slider} = useSelector((state) => state.config);
  return (
    <div className="App">
      <Routes>
        <Route
          path=""
          preload={() => {
            console.log("preload");
          }}
          element={<LaunchPage />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {window.location.pathname !== "/" && <MobileFooter />}
      {slider &&
        slider.map((cur) => {
          const Component = SliderHoc[cur.id];
          return <Component key={cur.id} />;
        })}
    </div>
  );
}

export default App;

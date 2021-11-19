import React from "react";
import "./fonts/Gilroy/styles.css";
import "./App.less";
import LaunchPage from "./components/pages/Launch";
import {useSelector} from "react-redux";
import SliderHoc from "./hoc/Slider";
/**
 * App component
 * @return {any}
 */
function App() {
  const {slider} = useSelector((state) => state.config);
  return (
    <div className="App">
      <LaunchPage/>
      {slider && slider.map((cur)=>{
        const Component = SliderHoc[cur.id];
        return <Component key={cur.id} />;
      })}
    </div>
  );
}

export default App;

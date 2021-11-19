import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Loader from "./components/atoms/Loader";
import reportWebVitals from "./reportWebVitals";
import createdStore from "./store/createstore";


const App = lazy(()=>import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createdStore()}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path=""
              preload={() => {
                console.log("preload");
              }}
              element={<App />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

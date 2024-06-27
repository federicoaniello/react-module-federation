import {Routes,Route} from "react-router-dom";
import Home from "../Views/Home";
import React, { Suspense } from "react";
import About from "../Views/About";
const Header = React.lazy(() => import("header/Header"));
export default function App () {

    return (
      <>
       <Suspense fallback={<h1>Loading...</h1>}>
       <Header></Header>
       </Suspense>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </>
    )
}
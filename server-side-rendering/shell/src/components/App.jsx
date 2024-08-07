import {Routes,Route} from "react-router-dom";
import Home from "../Views/Home";
import React, { Suspense } from "react";
import About from "../Views/About";
import Contact from "contact/Contact";
import LandingPage from "landingpage/Landingpage";
import Catalog from "catalog/Catalog";
const Header = React.lazy(() => import("header/Header"));
export default function App () {

    return (
      <>
       <Suspense fallback={<h1>Loading...</h1>}>
       <Header></Header>
       </Suspense>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/landingpage" Component={LandingPage}></Route>
          <Route path="/about" Component={About} />
          <Route path="/catalog" Component={Catalog}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </>
    )
}
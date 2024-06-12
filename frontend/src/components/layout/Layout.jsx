import React from "react";
import Headers from "../headers/Headers";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";

function Layout() {
  return (
    <>
      <Headers />
      <main>
        <Routers />
        
      </main>
      <Footer />
    </>
  );
}

export default Layout;

import React from "react";
import Appbar from "./components/Appbar";

function Homepage() {
  return (
    <div className="text-center mt-2 flex gap-3 h-screen">
      <Appbar />
      <div>Messages and shit i guess</div>
    </div>
  );
}

export default Homepage;

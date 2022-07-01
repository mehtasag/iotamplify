import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    setTimeout(function () {
      window.location.replace("/");
    }, 8000);
  }, []);
  return (
    <div className="grid place-content-center bg-gray-900 w-full h-screen">
      <h3 className="text-gray-100 text-1xl md:text-3xl font-bold">
        Thanks for visiting ! Hope to see you back !
      </h3>
    </div>
  );
};

export default Logout;

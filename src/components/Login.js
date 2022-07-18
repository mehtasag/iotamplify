import { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Inbox from "./images/Inbox.svg";
const Login = () => {
  const hour = new Date().getHours();
  useEffect(() => {
    setTimeout(function () {
      window.location.replace("/");
    }, 4000);
  }, []);

  return (
    <div className="md:grid block  bg-gray-900 w-full h-screen">
      <div>
        <h3 className="text-[1.2rem] ml-5 md:ml-20 2xl:ml-40 md:mt-3 md:text-2xl text-cyan-300 fontFamily font-bold">
          {hour < 12 ? "Good Morning" : "Good Afternoon"}
        </h3>
      </div>
      <div className="text-center gap-10">
        <img
          src={Inbox}
          className="w-[90%] md:w-[50%] md:ml-[15%] mt-[20%] md:mt-0 ml-3 md:mb-[3vh]"
          lazyloaded
        />
        <h5 className="text-[1.5rem]md:text-3xl mb-7 font-extrabold text-white mt-3 md:mt-0">
          Thanks for Sign-In with us
        </h5>
        <p className="text-rose-300 text-[0.8rem] fontFamily font-medium">
          Wait while you're redirected to Home Screen
        </p>
      </div>
    </div>
  );
};

export default withAuthenticator(Login);

import { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
const Login = () => {
  const hour = new Date().getHours();
  useEffect(() => {
    setTimeout(function () {
      window.location.replace("/");
    }, 8000);
  }, []);

  return (
    <div className="grid  bg-gray-900 w-full h-screen">
      <div>
        <h3 className="text-[1.2rem] md:mt-3 md:text-2xl text-cyan-300 fontFamily font-bold">
          {hour < 12 ? "Good Morning" : "Good Afternoon"}
        </h3>
      </div>
      <div className="text-center gap-10">
        <h5 className="text-3xl mb-7 font-extrabold text-white">
          Thanks for Sign-In with us
        </h5>
        <p className="text-rose-300 fontFamily font-medium">
          Wait while you're redirected to Home Screen'
        </p>
      </div>
    </div>
  );
};

export default withAuthenticator(Login);

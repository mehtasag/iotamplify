import { Link } from "react-router-dom";

const NotSignedIn = () => {
  return (
    <div className="grid place-items-center mt-6">
      <h2 className="text-2xl md:text-3xl text-gray-700 font-extrabold fontFamily">
        You are not signed in !!!
      </h2>

      <Link className="mt-8" to="/login">
        <span className="bg-yellow-400 p-2 text-[0.8rem]  text-gray-700 font-bold rounded-2xl fontFamily">
          Sign in for free !
        </span>
      </Link>
      <p className="mt-3 ml-7  md:ml-0 text-1xl font-bold text-cyan-900 fontFamily">
        SignIn to READ && WRITE comments and interact with other users !!
        comments
      </p>
    </div>
  );
};

export default NotSignedIn;

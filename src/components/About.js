import React from "react";
import NavbarLinks from "../components/NavbarLinks";
import { NavLink, Link } from "react-router-dom";
import { RewindIcon } from "@heroicons/react/solid";

const Reuse = ({ title }) => (
  <div className="grid  rounded-3xl border-2 border-slate-400 place-items-center  w-[28vw] h-[20vh]">
    <h2 className="grid p-2 hover:tracking-widest  text-[1.3rem] text-amber-500 font-bold font-sans ">
      {title}
    </h2>
  </div>
);
const About = () => {
  return (
    <div className="overflow-x-hidden bg-slate-900 w-full min-h-[100vh] max-h-full">
      <div className="w-fit p-2 mb-4 ml-4 animation-pulse">
        <div className="w-10">
          <Link to="/">
            <RewindIcon className="text-white h-10 animate-bounce w-fit" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-5 absoulte mx-[5vw] my-[5vh] ">
          <Reuse title="AWS Amplify Schema Design" />
          <Reuse title="Role Based Access Management" />
          <Reuse title="REST API Integartion Along WIth GraphQL" />
          <Reuse title="Tailwind CSS" />
          <Reuse title="Responsiveness" />
          <Reuse title="React JS Framework" />
          <Reuse title="S3 Access Control / DynamoDB / SQS" />
          <Reuse title="DynamoDB Stream / Lambda Trigger" />
          <Reuse title="Sendgrid Welcome Email on SignUp" />
          <Reuse title="Mutation / Realtime Update " />
        </div>
      </div>
    </div>
  );
};

export default About;

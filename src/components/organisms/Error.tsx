import React from "react";
import Spinner from "../atoms/vectors/Spinner";

const Error = ({ message }: { message: string }) => {
  return (
    <div className="w-full flex items-center justify-center">
      {message == "loading" && <Spinner />}
      {message == "error" && <h1>Error</h1>}
    </div>
  );
};

export default Error;

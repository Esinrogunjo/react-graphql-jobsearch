import React, { ReactNode } from "react";

const JobWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default JobWrapper;

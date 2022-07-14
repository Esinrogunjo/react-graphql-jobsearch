import React from "react";
type buttonType = {
  label: string;
  className?: string;
};
const Button = ({ className, label }: buttonType) => {
  return <button className={`${className && className}`}>{label}</button>;
};

export default Button;

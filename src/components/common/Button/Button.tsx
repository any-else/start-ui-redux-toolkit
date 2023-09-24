import React from "react";

type Props = {
  title: string;
  className?: unknown;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ title, className, onClick }: Props) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

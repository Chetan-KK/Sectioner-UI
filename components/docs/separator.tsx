import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Separator = ({ children }: Props) => {
  return <div className="border-t border-border pt-3">{children}</div>;
};

export default Separator;

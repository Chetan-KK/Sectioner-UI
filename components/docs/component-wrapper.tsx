import { Expand, Flag } from "lucide-react";
import { useTheme } from "nextra-theme-docs";
import { Button } from "nextra/components";
import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  classname?: string;
};

const ComponentWrapper = ({ children, classname }: Props) => {
  const [wrapperClassName, setWrapperClassName] = useState("");

  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setWrapperClassName("preview-wrapper dark");
    } else {
      setWrapperClassName("preview-wrapper");
    }
  }, [resolvedTheme]);

  return (
    <>
      <div
        className="rounded-lg overflow-hidden"
        style={{
          border: "1px solid rgb(var(--doc-border))",
        }}
      >
        <div className={`${wrapperClassName}`}>
          <div
            className={`flex items-center justify-center py-10 px-3 flex-row  ${classname}`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentWrapper;

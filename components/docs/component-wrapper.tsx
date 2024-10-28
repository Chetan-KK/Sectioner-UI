import { Expand } from "lucide-react";
import { Button } from "nextra/components";
import { ExpandIcon, MenuIcon } from "nextra/icons";
import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const ComponentWrapper = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <div
        className="relative rounded-lg overflow-hidden"
        style={{
          border: "1px solid rgb(var(--doc-border))",
        }}
      >
        <Button
          className="absolute right-4 top-4 p-2"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <Expand className="h-5 w-5" />
        </Button>
        <div className="scale-75">{children}</div>
      </div>
      {expanded && (
        <div className="fixed top-0 left-0 z-20 nx h-screen w-full p-4 backdrop-blur-sm">
          <div className="relative bg-background h-full rounded-2xl">
            <Button
              className="absolute right-4 top-4 p-2"
              onClick={() => setExpanded((prev) => !prev)}
            >
              <Expand className="h-5 w-5" />
            </Button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ComponentWrapper;

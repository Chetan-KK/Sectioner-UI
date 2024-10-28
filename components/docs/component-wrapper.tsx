import { Expand, Flag } from "lucide-react";
import { Button } from "nextra/components";
import { ExpandIcon, MenuIcon } from "nextra/icons";
import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

const ComponentWrapper = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setExpanded(false);
      setClosing(false);
    }, 150); // Match the duration of your fade-out animation
  };

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => document.body.classList.remove("no-scroll");
  }, [expanded]);

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
          onClick={() => setExpanded(true)}
        >
          <Expand className="h-5 w-5" />
        </Button>
        <div>{children}</div>
      </div>
      {expanded && (
        <div
          className={`fixed top-0 left-0 z-20 h-screen w-full p-10 backdrop-blur-xl ${
            closing ? "animate-fadeOut" : "animate-fadeIn"
          }`}
        >
          <div className="relative bg-background border border-border h-full rounded-2xl">
            <Button
              className="absolute right-4 top-4 p-2"
              onClick={handleClose}
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

import { Expand, Flag } from "lucide-react";
import { useTheme } from "nextra-theme-docs";
import { Button } from "nextra/components";
import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

const ComponentWrapper = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [closing, setClosing] = useState(false);
  const [wrapperClassName, setWrapperClassName] = useState("");

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setExpanded(false);
      setClosing(false);
    }, 130); // Match the duration of your fade-out animation
  };

  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => document.body.classList.remove("no-scroll");
  }, [expanded]);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setWrapperClassName("preview-component-wrapper dark");
    } else {
      setWrapperClassName("preview-component-wrapper");
    }
  }, [resolvedTheme]);

  // const wrapperClassName =
  //   resolvedTheme === "dark"
  //     ? " max-h-[45rem]"
  //     : "preview-component-wrapper";

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
        <div className={`${wrapperClassName}`}>{children}</div>
      </div>
      {expanded && (
        <div
          className={`fixed top-0 left-0 z-20 h-screen w-full p-10 backdrop-blur-xl ${
            closing ? "animate-fadeOut" : "animate-fadeIn"
          }`}
        >
          <div className="relative border border-border h-full rounded-2xl overflow-hidden">
            <Button
              className="absolute right-4 top-4 p-2"
              onClick={handleClose}
            >
              <Expand className="h-5 w-5" />
            </Button>
            <div className={`${wrapperClassName} h-full`}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComponentWrapper;

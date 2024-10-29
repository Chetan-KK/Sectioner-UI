import { Expand, Flag } from "lucide-react";
import { useTheme } from "nextra-theme-docs";
import { Button } from "nextra/components";
import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

const SectionWrapper = ({ children }: Props) => {
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
      setWrapperClassName("preview-wrapper dark");
    } else {
      setWrapperClassName("preview-wrapper");
    }
  }, [resolvedTheme]);

  return (
    <>
      <div className="relative rounded-lg overflow-hidden border border-border">
        <Button
          className="absolute md:right-4 right-3 top-3 md:top-4 p-2"
          onClick={() => setExpanded(true)}
        >
          <Expand className="md:h-5 h-4 w-4 md:w-5" />
        </Button>
        <div className={`${wrapperClassName}`}>{children}</div>
      </div>
      {expanded && (
        <div
          className={`fixed top-0 left-0 z-20 h-screen w-full p-5 md:p-10 backdrop-blur-xl ${
            closing ? "animate-fadeOut" : "animate-fadeIn"
          }`}
        >
          <div className="relative border border-border h-full rounded-2xl overflow-hidden">
            <Button
              className="absolute md:right-4 right-3 top-3 md:top-4 p-2"
              onClick={handleClose}
            >
              <Expand className="md:h-5 h-4 w-4 md:w-5" />
            </Button>
            <div className={`${wrapperClassName} h-full`}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper;

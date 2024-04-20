import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <h1 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Sectioner UI</h1>
  ),
  project: {
    link: "https://github.com/chetan-kk/Sectioner-UI",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/chetan-kk/Sectioner-UI",
  footer: {
    component: <footer></footer>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Sectioner UI",
    };
  },
};

export default config;

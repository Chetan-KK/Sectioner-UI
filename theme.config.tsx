import React from "react";
import { DocsThemeConfig, ThemeSwitch } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <h1 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Sectioner UI</h1>
  ),
  color: {
    hue: 267,
    saturation: 50,
  },
  toc: {
    backToTop: true,
    title: "this page",
  },

  backgroundColor: {
    light: "244, 241, 249",
    dark: "10, 6, 14",
  },
  search: {
    placeholder: "search...",
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  // banner: {
  //   text: (
  //     <p
  //       style={{
  //         fontWeight: "normal",
  //         fontSize: ".8rem",
  //       }}
  //     >
  //       🎉 new{" "}
  //       <Link href={"/docs/components/singleColumnHero"} className="link">
  //         Single Column Hero
  //       </Link>{" "}
  //       section added
  //     </p>
  //   ),
  //   dismissible: true,
  // },
  project: {
    link: "https://github.com/Chetan-KK/Sectioner-UI",
  },
  // chat: {
  //   link: "https://whatsapp.com",
  // },
  docsRepositoryBase: "https://github.com/chetan-kk/Sectioner-UI",
  footer: {
    component: <footer></footer>,
  },

  navbar: {
    extraContent: function () {
      return (
        <>
          <ThemeSwitch lite />
        </>
      );
    },
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
    </>
  ),
};

export default config;

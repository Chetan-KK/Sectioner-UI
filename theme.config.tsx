import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Link from "next/link";

const config: DocsThemeConfig = {
  logo: (
    <h1 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Sectioner UI</h1>
  ),
  primaryHue: 200,
  primarySaturation: 100,
  toc: {
    backToTop:true,
    title:"this page",
  },
  // faviconGlyph:"Se",
  search:{
    placeholder:"search..."

  },
  sidebar:{
    defaultMenuCollapseLevel:2,
    titleComponent:function({title,type}){
      if (type === 'separator') {
        return (
          <div className="separator">⭐ {title}</div>
        )
      }
      return <>{title}</>
    }
  },
  banner: {
    text: (
      <p
        style={{
          fontWeight: "normal",
          fontSize: ".8rem",
        }}
      >
        🎉 new{" "}
        <Link href={"/docs/components/singleColumnHero"} className="link">
          Single Column Hero
        </Link>{" "}
        section added
      </p>
    ),
    dismissible: true,
  },
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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
    </>
  ),
};

export default config;

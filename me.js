import React from "react";
import * as themes from "mdx-deck/themes";

console.log(themes);
const BackDrop = () => (
  <div
    style={{
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      backgroundColor: "black",
      opacity: 0.3
    }}
  />
);

const Credits = () => (
  <div
    style={{ position: "absolute", bottom: "2%", fontSize: 16, width: "100%" }}
  >
    Photo by{" "}
    <a
      style={{ color: "white" }}
      href="https://unsplash.com/photos/cQBstOkxmYE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    >
      Yannick Pulver
    </a>{" "}
    on{" "}
    <a
      style={{ color: "white" }}
      href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    >
      Unsplash
    </a>
  </div>
);

const Slide = ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: 'url("./assets/yannick-pulver-1529153-unsplash.jpg")',
      backgroundSize: "cover",
      position: "relative",
      color: "white"
    }}
  >
    <BackDrop />
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 1,
        position: "relative"
      }}
    >
      {children}
      <Credits />
    </div>
  </div>
);

export const Me = () => (
  <Slide>
    <img
      src="https://github.com/AugustinLF.png"
      style={{
        borderRadius: "50%",
        width: 128,
        height: 128,
        flexShrink: 0,
        marginBottom: 30
      }}
    />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "80%"
      }}
    >
      <div>
        I'm Augustin Le Fèvre. I work for Extia, currently contracting for Club
        Med.
      </div>
      <div>I mostly do front-end development.</div>
    </div>
  </Slide>
);
export const Links = () => (
  <Slide>
    <ul>
      <li>https://twitter.com/GusgusLF</li>
      <li>https://augustinlf.com</li>
      <li>https://github.com/AugustinLF</li>
      <li>https://www.meetup.com/fr-FR/Meetups-by-EXTIA</li>
    </ul>
  </Slide>
);

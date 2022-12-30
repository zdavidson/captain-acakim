import { Container, TextField } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Button from "../components/Button";

const Home: NextPage = () => {
  const watchButtonProps = {
    fontSize: "2rem",
    marginTop: "3rem",
    "@media screen and (max-width: 575px)": {
      marginTop: "1rem",
    },
  };
  return (
    <div>
      <Head>
        <title>Captain Acakim Joseph</title>
        <meta
          name="description"
          content="Captain Acakim Joseph, Caribbean RYA Certified yacht captain. Located in St. Georges, Grenada."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className="hero">
          <video autoPlay muted loop id="heroVideo">
            <source src="/temp-clip.mp4" type="video/mp4" />
          </video>
          <div className="imageFade">
            <Container maxWidth="lg">
              <nav>
                <div className="logo">
                  <Image
                    src="/anchor.png"
                    alt="yacht anchor"
                    height="64px"
                    width="64px"
                  />
                  <p>Acakim Joseph</p>
                </div>
                <ul>
                  <li>
                    <a href="#aboutMe">About Me</a>
                  </li>
                  {/* <li>Voyages</li> */}
                  <li>
                    <a href="mailto:acakimj.zjoseph@gmail.com">
                      <Button
                        sx={{
                          fontSize: "2rem",
                        }}
                        text="Contact"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="heroText">
                <h1>Captain Acakim</h1>
                <div className="qualifications">
                  <p>RYA Certified</p> <span>|</span>
                  <p>10+ years of experience</p>
                  <span>|</span> <p>10,000+ nautical miles</p>
                </div>
                {/* <Button sx={watchButtonProps} text="Watch" /> */}
              </div>
            </Container>
          </div>
        </div>
        {/* <div className="horizontalDivider">
          <div className="topHalf" />
          <div className="bottomHalf" />
        </div> */}
        <div id="aboutMe" className="aboutMe">
          <div className="imageFade">
            <Container maxWidth="lg">
              <div className="aboutContainer">
                <div className="aboutText">
                  <h2>About Me</h2>
                  <p>
                    Hi, my name’s Acakim (pronounced Ah-kim) Joseph, I’m an RYA
                    certified captain hailing from the beautiful island of
                    Grenada. I’ve been working on boats for as long as I can
                    remember, and I specialize in navigating beautiful the
                    waters of the Caribbean. <br></br> <br></br>Whether you’re
                    looking for someone to bring your boat to your next
                    location, a professional to give you the charter of a
                    lifetime, or just an experienced sailor to join you on a
                    voyage and give you a few pointers - I’m your captain. You
                    can reach me at:{" "}
                    <span>
                      <a
                        href="mailto:acakimj.zjoseph@gmail.com"
                        style={{ textDecoration: "underline" }}
                      >
                        acakimj.zjoseph@gmail.com
                      </a>
                    </span>{" "}
                    <br></br>
                    <br></br>I look forward to hearing from you!<br></br>
                    <br></br>
                    <span style={{ fontStyle: "italic", float: "right" }}>
                      {" "}
                      - Acakim
                    </span>
                  </p>
                </div>
                <div className="aboutImage">
                  <Image
                    id="aboutImage"
                    src="/acakim.jpg"
                    alt="sailing"
                    height="665px"
                    width="443px"
                    // layout="fill"
                    // height="50vh"
                    // width="100%"
                    // height="700px"
                    // width="500px"
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Home;

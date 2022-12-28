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
        <title>Captain Joseph</title>
        <meta
          name="description"
          content="Captain Joseph, Caribbean RYA Certified yacht captain. Located in St. Georges, Grenada."
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
                  <li>About Me</li>
                  <li>Voyages</li>
                  <li>
                    <Button
                      sx={{
                        fontSize: "2rem",
                      }}
                      text="Contact"
                    />
                  </li>
                </ul>
              </nav>
              <div className="heroText">
                <h1>Captain Joseph</h1>
                <div className="qualifications">
                  <p>RYA Certified</p> <span>|</span>
                  <p>15+ years of experience</p>
                  <span>|</span> <p>10,000+ nautical miles</p>
                </div>
                <Button sx={watchButtonProps} text="Watch" />
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

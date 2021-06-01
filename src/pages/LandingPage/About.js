import React from "react";
import Banner from "../../components/Banner";
import { Element } from "react-scroll";

function About({ id }) {
  return (
    <Element name={id}>
      <Banner
        title={"About Me"}
        caption={`Hey there! I am a graduate from the University of Waterloo who studied computer science.
      I have a passion for programming, technology, and in general, learning new things so that I can apply them in creative ways.
      Here you can follow me as I try my hand with photography, as well as view some of the things I've done during my co-op terms.
      I'm also starting to dabble with a bit of guitar and music in general, so be prepared for that in the future!`}
      />
    </Element>
  );
}

export default About;

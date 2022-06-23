import React from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <section>
          <div>
            <h2>Covid ID</h2>
            <p>Monitoring Perkembangan Covid</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
            <Button>Vaccine</Button>
          </div>
          <div>
            <img src="https://picsum.photos/536/354" alt="placeholder" />
          </div>
        </section>
      </div>
    </StyledHero>
  );
};

export default Hero;

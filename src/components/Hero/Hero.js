import React from "react";
import { Header, H1, HeadingContainer } from "./styles";

class Hero extends React.Component {
  render() {
    return (
      <Header>
        <div className="wallpaper">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
        <HeadingContainer>
          <H1>I'm Kamran Tahir</H1>
          <H1>A Web Developer & Reader</H1>
        </HeadingContainer>
      </Header>
    );
  }
}

export default Hero;

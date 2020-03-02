import React from 'react';
import { Header, H1, HeadingContainer } from './styles';

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
          <H1>
            Full-Stack Developer &<br></br>
            Avid Novel Reader
          </H1>
        </HeadingContainer>
      </Header>
    );
  }
}

export default Hero;

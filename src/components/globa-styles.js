import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';
const GlobalStyle = createGlobalStyle`

.body {
  margin: 0;
}

.headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2000;
  }

  .headroom {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 1rem 1.5rem;
    svg {
      height: 2.5rem;
      g {
        fill: #fff;
      }
    }
  }


.headroom--unfixed {
  position: relative;
  transform: translateY(0);
  transition: all 0.25s ease-in-out 0s;
}

.headroom--unpinned {
  position: fixed;
  transform: translateY(-100%);
}

  .headroom--scrolled {
    padding: 8px 0;
    transition: transform 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.035);
    box-shadow:
  0 1.4px 2.9px -15px rgba(0, 0, 0, 0.035),
  0 11px 23px -15px rgba(0, 0, 0, 0.07);
  }
  
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    background: #fff;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  }
  .wallpaper {
    position: relative;
    height: 100vh;
    overflow: hidden;
    }

  
  .cube {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #e6f9ff;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
  
  &:nth-child(2n) {
    border-color: lighten(#e6f9ff, 10%);
  }
  
  &:nth-child(2) {
    animation-delay: 2s;
    left: 25vw;
    top: 40vh;
  }
  
  &:nth-child(3) {
    animation-delay: 4s;
    left: 75vw;
    top: 50vh;
  }
  
  &:nth-child(4) {
    animation-delay: 6s;
    left: 90vw;
    top: 10vh;
  }
  
  &:nth-child(5) {
    animation-delay: 8s;
    left: 10vw;
    top: 85vh;
  }
  
  &:nth-child(6) {
    animation-delay: 10s;
    left: 50vw;
    top: 10vh;
  }
}

@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);   
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%); 
    opacity: 0;
  }
}
`;
export default GlobalStyle;

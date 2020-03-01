import styled from "styled-components";
import "typeface-nunito";

export const Header = styled.header`
  height: 650px;
  position: relative;
  overflow: hidden;
`;

export const H1 = styled.h1`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "Nunito", -apple-system, "BlinkMacSystemFont", "Segoe UI",
    "Roboto", "Helvetica", "Arial", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 700;
  text-rendering: optimizeLegibility;
  font-size: 2.441rem;
  line-height: 1.1;
`;

export const HeadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 70rem;
  margin-bottom: 7rem;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 2rem;
`;

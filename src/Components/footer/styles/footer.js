import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: #2e5f95;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
  @media (max-width: 320px) and (min-width: 320px) {
    margin-right: 60px !important;
    margin-left: 10px !important;
  }
  @media (max-width: 375px) and (min-width: 375px) {
    margin-right: 60px !important;
    margin-left: 40px !important;
  }
  @media (max-width: 425px) and (min-width: 425px) {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #9ACD32;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

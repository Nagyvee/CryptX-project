import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MainSection from "../Components/MainSection";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Section = styled.div`
  display: flex;
  margin: 0;
  padding: 0;

`;

const Content = styled.div`
 padding:0 0 0 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  position: relative;
  flex: 1;
`;

const Home = () => {
  return (
    <Section>
      <Sidebar />
      <Content>
        <Navbar />
        <Main>
          <MainSection />
        </Main>
      </Content>
    </Section>
  );
};

export default Home;

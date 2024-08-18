import styled from "styled-components";
import BottomSection from './BottomSection';
import TopSection from "./TopsSection";

const Section = styled.section`
  display: flex;
  height: 100vh;
  overflow: auto;
  width: 100%;
  flex-direction: column;
  padding: 1rem 0;
  padding-bottom: 4rem;
`;


const MainSection = () => {
  return (
    <Section>
      <TopSection />
      <BottomSection />
    </Section>
  );
};

export default MainSection;

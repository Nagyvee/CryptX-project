import styled from "styled-components";
import BottomSection from './BottomSection'

const Section = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  padding: 1rem 0;
`;


const MainSection = () => {
  return (
    <Section>
      <BottomSection />
    </Section>
  );
};

export default MainSection;

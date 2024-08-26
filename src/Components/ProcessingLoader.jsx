import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
display: flex;
z-index: 100;
position: fixed;
padding: 1.5rem;
top: 30%;
left: 30%;
flex-direction: column;
 align-items: center;
 justify-content: center;
 max-width: 650px;
 min-width: 275px;
 height: 300px;
 border-radius: 5px;
 background-color: var(--black);
 color: #fff;
 gap: 1rem;

 p{
 font-size: 1rem;
 }
`;

const ProcessingLoader = ({ text, left }) => {
  return (
    <Container left={left} >
        <FontAwesomeIcon icon={faSpinner} size="4x" spin />
       <p>{text}</p>
    </Container>
  );
};

export default ProcessingLoader;

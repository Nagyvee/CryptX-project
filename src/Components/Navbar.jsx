import styled from "styled-components";
import profileIcon from "../assets/profile.png";
import { FiBell, FiHelpCircle, FiChevronDown, FiSearch } from "react-icons/fi";

const NavContainer = styled.nav`
  width: 100%;
  height: 4.5rem;
  padding: 2rem 1.5rem 2rem 1rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  color: #333;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  svg {
    cursor: pointer;
    color: #777;

    &:hover{
    border-radius: 50%;
    background-color: #f4f4f4;
    transform: scale(1.2);
    }
  }
`;

const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 0.9rem;
  color: #333;
`;

const Small = styled.p`
  font-size: 0.8rem;
  color: #888;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
  cursor: pointer;

  &:hover {
    border-color: #aaa;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`;

const Icons = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 1.23rem;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const Input = styled.input`
  height: 35px;
  min-width: 300px;
  width: 100%;
  font-size: .9rem;
  padding: 0.4rem;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const SearchWrap = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    right: .65rem;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <SearchWrap>
        <Input type="text" placeholder="Search type of keys" />
        <FiSearch />
      </SearchWrap>
      <Profile>
        <Icons>
          <FiBell />
          <FiHelpCircle />
        </Icons>
        <ImageContainer>
          <Image src={profileIcon} alt="profile image" />
          <div>
            <Text>Nigel Vee</Text>
            <Small>@nigelvee</Small>
          </div>
          <FiChevronDown />
        </ImageContainer>
      </Profile>
    </NavContainer>
  );
};

export default Navbar;

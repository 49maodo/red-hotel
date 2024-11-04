// components/Header.js
import styled from 'styled-components';
import { FaSearch, FaBell } from 'react-icons/fa';
import { LuLogOut } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0px 30px;
  margin: 0px;
  @media screen and (max-width: 768px){
    position: sticky;
    top: 0px;
    z-index: 9;
    padding: 10px 30px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  @media screen and (max-width: 768px){
    display: none;
  }
`;
const Menu = styled.button`
  
  @media screen and (min-width: 768px){
    display: none;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const Notifications = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NotificationIcon = styled.div`
  position: relative;
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;

  .badge {
    background-color: #ff9800;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    position: absolute;
    top: -10px;
    right: 10px;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

export const Header = ({ toggleSidebar, onLogout }) => (
  <HeaderWrapper>
    <Menu onClick={toggleSidebar}>
      <CiMenuBurger />
    </Menu>
    <Title>Dashboard</Title>
    <Notifications>
      <SearchWrapper>
        <SearchInput placeholder="Recherche" />
        <FaSearch style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', color: '#aaa' }} />
      </SearchWrapper>
      <NotificationIcon>
        <span className="badge">3</span>
        <FaBell />
      </NotificationIcon>
      <ProfileImage src="/image/1.jpg" alt="Profile" />
      <LuLogOut onClick={onLogout} style={{ cursor: 'pointer' }} />
    </Notifications>
  </HeaderWrapper>
);

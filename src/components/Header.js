// components/Header.js
import styled from 'styled-components';
import { FaSearch, FaBell, FaSignOutAlt } from 'react-icons/fa';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0px 30px;
  border-radius: 2rem;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

const SearchWrapper = styled.div`
  position: relative;
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

export const Header = ({ onLogout }) => (
  <HeaderWrapper>
    <Title>Dashboard</Title>
    <Notifications>
    <SearchWrapper>
      <SearchInput placeholder="Recherche" />
      <FaSearch style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', color: '#aaa' }} />
    </SearchWrapper>
      <NotificationIcon>
        <FaBell />
        <span className="badge">3</span>
      </NotificationIcon>
      <ProfileImage src="/image/1.jpg" alt="Profile" />
      <FaSignOutAlt onClick={onLogout} style={{ cursor: 'pointer' }} />
    </Notifications>
  </HeaderWrapper>
);

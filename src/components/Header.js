import { FaBell } from 'react-icons/fa';
import { LuLogOut } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import { HeaderWrapper, Title, Menu, SearchWrapper, SearchInput, SearchIcon,
Notifications, NotificationIcon, ProfileImage } from '@/styles/header.style';

export const Header = ({ toggleSidebar, onLogout }) => (
  <HeaderWrapper>
    <Menu onClick={toggleSidebar}>
      <CiMenuBurger />
    </Menu>
    <Title>Dashboard</Title>
    <Notifications>
      <SearchWrapper>
        <SearchIcon />
        <SearchInput placeholder="Recherche" />
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

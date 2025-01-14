import { FaBell } from 'react-icons/fa';
import { LuLogOut } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import {
  HeaderWrapper, Title, Menu, SearchWrapper, SearchInput, SearchIcon,
  Notifications, NotificationIcon, ProfileImage
} from '@/styles/header.style';
import { useAuth } from './AuthContext';

export const Header = () => {
  const { handleLogout, toggleSidebar } = useAuth();
  return <HeaderWrapper>
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
      <LuLogOut onClick={handleLogout} style={{ cursor: 'pointer' }} />
    </Notifications>
  </HeaderWrapper>
};

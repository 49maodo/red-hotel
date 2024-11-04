// components/Sidebar.js
'use client'
import styled from 'styled-components';
import { HiComputerDesktop } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: white;
  position: fixed;
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  @media screen and (max-width: 768px){
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-100%)')};
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  }
`;

const Logo = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  cursor:pointer;
  & p{
  padding: 0px 20px;
  }
`;

const MenuItem = styled.li`
  padding: 0px 0px;
  cursor: pointer;
  display: flex;
  margin: 15px 0px;
  &:hover, &.active {
    background-color: #444;
  }
  & a{
  color: white;
  padding: 0px 20px;
  gap: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  height : 40px;
  text-decoration: none;
  }
  & a:hover, & .active{
    font-weight: bolder;
    background-color: #F8F8F8;;
    color: black;
    border: none;
  }
`;

const Profile = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Status = styled.div`
  color: #4caf50;
  font-size: 12px;
`;

export const Sidebar = ({ user, isVisible }) => {
  const pathname = usePathname()
  return (
    <SidebarWrapper isVisible={isVisible}>
      <div>
        <Logo>RED PRODUCT</Logo>
        <Menu>
        <p>Principal</p>
          <MenuItem>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
              <MdDashboard /> <span>Dashboard</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className={`link ${pathname === '/hotel' ? 'active' : ''}`} href='/hotel'>
              <HiComputerDesktop />
              <span>Liste des hôtels</span>
            </Link>
          </MenuItem>
        </Menu>
      </div>
      <Profile>
        <Avatar src="/image/1.jpg" alt="Profile" />
        <div>
          <div>{user.nom} {user.prenom}</div>
          <Status>en ligne</Status>
        </div>
      </Profile>
    </SidebarWrapper>
  );
};

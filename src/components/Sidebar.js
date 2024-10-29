// components/Sidebar.js
import styled from 'styled-components';
import { FaTachometerAlt, FaHotel } from 'react-icons/fa';
import Link from 'next/link';

const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  padding: 15px 10px;
  cursor: pointer;
  display: flex;
  // gap: 15px;
  align-items: center;
  &:hover, &.active {
    background-color: #444;
  }
  & a{
  color: white;
  gap: 15px;
  text-decoration: none;
  }
  & a:hover, & .active{
    font-weight: bolder;
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

export const Sidebar = ({ user }) => {
  return (
    <SidebarWrapper className='sidebar'>
      <div>
        <Logo>RED PRODUCT</Logo>
        <Menu>
          <MenuItem>
            <Link href='/' className="active">
              <FaTachometerAlt /> <span>Dashboard</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href='/hotel'>
              <FaHotel /> <span>Liste des hôtels</span>
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

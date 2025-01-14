import { HiComputerDesktop } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { SidebarWrapper, Logo, Menu, MenuItem, Profile, Avatar, Status } from '@/styles/sidebar.style';
import { useAuth } from "./AuthContext";

export const Sidebar = () => {
  const { user, sidebarVisible } = useAuth();
  const pathname = usePathname()
  return (
    <SidebarWrapper isvisible={sidebarVisible}>
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
          <div>{user?.nom} {user?.prenom}</div>
          <Status>en ligne</Status>
        </div>
      </Profile>
    </SidebarWrapper>
  );
};

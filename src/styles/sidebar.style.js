import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('/image/bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  position: fixed;
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  @media screen and (max-width: 768px){
    transform: ${({ isvisible }) => (isvisible ? 'translateX(0)' : 'translateX(-100%)')};
    display: ${({ isvisible }) => (isvisible ? 'flex' : 'none')};
  }
`;

export const Logo = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  cursor:pointer;
  & p{
  padding: 0px 20px;
  }
`;

export const MenuItem = styled.li`
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

export const Profile = styled.div`
  border-top: 0.5px solid #F8F8F8;
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const Status = styled.div`
  color: #4caf50;
  font-size: 12px;
`;
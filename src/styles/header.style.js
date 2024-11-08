import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0px 20px;
  margin: 0px;
  position: sticky;
    top: 0;
    z-index: 5;
  @media screen and (max-width: 768px){
    position: sticky;
    top: 0px;
    z-index: 9;
    padding: 10px 30px;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  @media screen and (max-width: 768px){
    display: none;
  }
`;
export const Menu = styled.button`
  
  @media screen and (min-width: 768px){
    display: none;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 768px){
    display: none;
  }
`;
export const SearchInput = styled.input`
  border-radius: 20px;
  padding: 10px 10px 10px 35px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 150px;
`;
export const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  pointer-events: none;
`;
export const Notifications = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const NotificationIcon = styled.div`
  position: relative;
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;

  .badge {
    background-color: #fcc100;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    position: absolute;
    top: -10px;
    right: -10px;
  }
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;
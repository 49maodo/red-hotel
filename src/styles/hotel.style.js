import styled from 'styled-components';

export const Welcome = styled.div`
  padding: 0px 20px;
  z-index: 20;
  display: flex;
  background-color: white;
  align-items: center; 
  border-top: 1px solid rgb(179 173 173 / 50%);
  border-bottom: 1px solid rgb(179 173 173 / 50%);
  margin-bottom: 15px;
  justify-content: space-between;
  & span {
    opacity: 0.5;
  }
  & h2 {
    font-size: 25px;
    font-weight: 400;
  }
`;

export const HotelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 10px;
  padding: 0px 20px;
  @media screen and (max-width: 800px){
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
  @media screen and (max-width: 465px){
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const HotelCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const HotelImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  display: block; 
  margin: 0 auto;
`;

export const HotelInfo = styled.div`
  padding: 0px 15px;
  magin:0px;
`;

export const HotelName = styled.h3`
  margin: 0px;
  padding: 0px;
  font-size: 26px;
`;

export const HotelAddress = styled.p`
  font-size: 14px;
  margin: 0px;
  padding:5px 0px;
  color: #8D4B38;
;
`;

export const HotelPrice = styled.p`
  font-size: 15px;
  margin: 0px;
  padding:5px 0px;
  font-weight: bold;
  color: #000;
`;
export const HotelFooter = styled.div`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-around;
  color: white;
`;
export const HotelEdit = styled.button`
  width: 40px;
  height: 30px;
  background-color: #4361ee;
  display:flex;
  align-items: center;
  cursor: pointer;
  border-radius: 1rem;
  justify-content: center;
`;
export const HotelDelete = styled.button`
  width: 40px;
  height: 30px;
  background-color: #d80032;
  display:flex;
  cursor: pointer;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
`;
export const Button1 = styled.button`
  padding: 10px 20px;
  background-color: transparant;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;
import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 20px;
  padding: 0px 20px;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 13px;
  padding: 10px;
  flex: 1;
  min-width: 280px;
  display: flex;
  align-items: center;    
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 15px;
  & div{
    margin: 3px;
    padding: 0px;
    
  }
  & div p{
    margin: 0px;
    padding: 0px;
  }
  i {
    font-size: 40px;
    margin-right: 20px;
  }

  .info {
    display: flex;  
    align-items: center;
    /* gap: 0px; */
    margin: 0px;
    padding: 0px;
  }

  .number {
    font-size: 24px;
    font-weight: 500;
    margin: 0px;
  }

  .label {
    color: #888;
    margin: 0px;
  }
  .formulaire{
  width: 55px;
  height:55px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #a88add;
  }
  .message{
  width: 55px;
  height:55px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #0cc2aa;
  }
  .user{
  width: 55px;
  height:55px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #fcc100;
  }
  .email{
  width: 55px;
  height:55px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #f90000;
  }
  .hotel{
  width: 55px;
  height:55px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #9c27b0;
  }
  .entite{
  width: 55px;
  height:55px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #1565c0;
  }
`;

export const Welcome = styled.div`
  background-color: white;
  padding: 0px 20px;
  border-top: 1px solid rgb(179 173 173 / 50%);
  border-bottom: 1px solid rgb(179 173 173 / 50%);
  margin-bottom: 15px;
  
  & h2{
    margin-bottom: 0px;
    padding:0px;
    font-size: 25px;
    font-weight: 400;
  }
  & p{
    margin-top: 0px;
    color: #000000DE;
    padding:0px;
    font-size: 15px;
    font-weight: 100;
  }
`;
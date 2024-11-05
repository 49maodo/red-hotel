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
  border-radius: 10px;
  padding: 5px;
  flex: 1;
  min-width: 300px;
  display: flex;
  align-items: center;    
  justify-content: flex-start;
  flex-wrap: now-wrap;
  gap: 20px;
  i {
  border: 2px solid red;
    font-size: 40px;
    margin-right: 20px;
  }

  .info {
    display: flex;  
    align-items: center;
    gap: 5px
  }

  .number {
    font-size: 24px;
    font-weight: 500;
  }

  .label {
    color: #888;
  }
  .formulaire{
  width: 65px;
  height:65px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #a88add;
  }
  .message{
  width: 65px;
  height:65px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #0cc2aa;
  }
  .user{
  width: 65px;
  height:65px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #fcc100;
  }
  .email{
  width: 65px;
  height:65px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #f90000;
  }
  .hotel{
  width: 65px;
  height:65px;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #9c27b0;
  }
  .entite{
  width: 65px;
  height:65px;
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
  padding: 5px 25px;
  border-top: 1px solid rgb(179 173 173 / 50%);
  border-bottom: 1px solid rgb(179 173 173 / 50%);
  margin-buttom: 15px;
  & h2{
    margin: 0px;
    padding:0px;
    font-size: 25px;
    font-weight: 400;
  }
  & p{
    margin: 0px;
    padding:0px;
    font-size: 15px;
    font-weight: 200;
  }
`;
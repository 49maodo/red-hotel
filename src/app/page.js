// pages/index.js
'use client'
import styled from 'styled-components';
import LayoutHome from './layoutHome';
import { FaEnvelope, FaComments, FaUsers, FaBuilding } from 'react-icons/fa';

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 20px;
  padding: 0px 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  flex: 1;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  i {
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

const Welcome = styled.div`
  background-color: white;
  padding: 5px 20px;
  border-top: 1px solid rgb(179 173 173 / 50%);
  border-bottom: 1px solid rgb(179 173 173 / 50%);
  margin-buttom: 15px;
  & h2{
  margin: 0px;
  padding:0px;
  }
  & p{
  margin: 0px;
  padding:0px;
  }
`;

export default function Dashboard() {
  return (
    <LayoutHome>
      <Welcome>
        <h2>Bienvenue sur RED Product</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </Welcome>
      <CardsWrapper>
        <Card>
          <div className='formulaire'>
            <FaEnvelope/>
          </div>
          <div >
            <div className="info">
              <div className="number">125</div>
              <div className="label">Formulaires</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
        <Card>
          <div className='message'>
            <FaEnvelope/>
          </div>
          <div >
            <div className="info">
              <div className="number">25</div>
              <div className="label">E-mails</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
        <Card>
          <div className='user'>
          <FaComments />
          </div>
          <div >
            <div className="info">
              <div className="number">40</div>
              <div className="label">Messages</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
        <Card>
          <div className='email'>
            <FaUsers />
          </div>
          <div >
            <div className="info">
              <div className="number">600</div>
              <div className="label">Utilisateurs</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
        <Card>
          <div className='hotel'>
          <FaBuilding />
          </div>
          <div >
            <div className="info">
              <div className="number">40</div>
              <div className="label">Hotels</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
        <Card>
          <div className='entite'>
            <FaBuilding />
          </div>
          <div >
            <div className="info">
              <div className="number">02</div>
              <div className="label">Entités</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
      </CardsWrapper>
    </LayoutHome>
  );
}
// pages/index.js
'use client'
import styled from 'styled-components';
import LayoutHome from './layoutHome';
import { FaEnvelope, FaComments, FaUsers, FaBuilding } from 'react-icons/fa';

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
`;

const Welcome = styled.div`
  margin: 0px 0px;
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
          <FaEnvelope />
          <div >
            <div className="info">
              <div className="number">125</div>
              <div className="label">Formulaires</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
        <Card>
          <FaEnvelope />
          <div >
            <div className="info">
              <div className="number">25</div>
              <div className="label">E-mails</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
        <Card>
          <FaComments />
          <div >
            <div className="info">
              <div className="number">40</div>
              <div className="label">Messages</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
        <Card>
          <FaUsers />
          <div >
            <div className="info">
              <div className="number">600</div>
              <div className="label">Utilisateurs</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
        <Card>
          <FaBuilding />
          <div >
            <div className="info">
              <div className="number">40</div>
              <div className="label">Hotels</div>
            </div>
            <p>Je sais pas quoi mettre</p>
          </div>
        </Card>
        <Card>
          <FaBuilding />
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
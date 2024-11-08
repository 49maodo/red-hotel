// pages/index.js
'use client'
import LayoutHome from './layoutHome';
import { FaEnvelope, FaComments, FaUsers, FaBuilding } from 'react-icons/fa';
import { CardsWrapper, Card, Welcome } from '@/styles/home.style';

export default function Dashboard() {
  return (
    <>
      <LayoutHome>
        <Welcome>
          <h2>Bienvenue sur RED Product</h2>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </Welcome>
        <CardsWrapper>
          <Card>
            <div className='formulaire'>
              <FaEnvelope />
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
              <FaEnvelope />
            </div>
            <div>
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
    </>
  );
}
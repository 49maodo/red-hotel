"use client"; 

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LayoutHome from '../layoutHome';
import HotelModal from '@/components/HotelModal';

// Styles pour les composants
const Welcome = styled.div`
  margin: 0px 20px;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  & span {
    opacity: 0.5;
  }
`;

const HotelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 0px;
`;

const HotelCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;  
  margin: 0 auto;
`;

const HotelInfo = styled.div`
  padding: 0px 15px;
`;

const HotelName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const HotelAddress = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const HotelPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;

export default function Hotel() {
    const [hotels, setHotels] = useState([]);
  const fetchHotels = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/hotel`, {
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des hôtels');
      }

      const data = await response.json();
      console.log('Données des hôtels:', data);

      if (Array.isArray(data) && data.length > 0) {
        setHotels(data);
      } else {
        console.error('Données des hôtels non valides', data);
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };
    useEffect(() => {
        // const fetchHotels = async () => {
        //     try {
        //       const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/hotel`, {
        //             credentials: 'include',
        //         });

        //         if (!response.ok) {
        //             throw new Error('Erreur lors de la récupération des hôtels');
        //         }

        //         const data = await response.json();
        //         console.log('Données des hôtels:', data);

        //         if (Array.isArray(data) && data.length > 0) {
        //             setHotels(data); 
        //         } else {
        //             console.error('Données des hôtels non valides', data);
        //         }
        //     } catch (error) {
        //         console.error('Erreur:', error);
        //     }
        // };
        fetchHotels();
    }, []);

    return (
        <LayoutHome>
            <Welcome>
                <h2>Hôtels <span>({hotels.length})</span></h2>
            <HotelModal refreshHotels={fetchHotels} />
            </Welcome>
            <HotelGrid>
                {hotels.map((hotel) => (
                    <HotelCard key={hotel._id}>
                    <HotelImage src={`${process.env.NEXT_PUBLIC_BACK_END}${hotel.image}`} alt={hotel.nom} />
                        <HotelInfo>
                            <HotelName>{hotel.nom}</HotelName>
                            <HotelAddress>{hotel.adresse}</HotelAddress>
                            <HotelPrice>{hotel.prix} {hotel.devise} par nuit</HotelPrice>
                        </HotelInfo>
                    </HotelCard>
                ))}
            </HotelGrid>
        </LayoutHome>
    );
}

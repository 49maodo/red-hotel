"use client";

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LayoutHome from '../layoutHome';
import Modal from '@/components/Modal';
import toast from "react-hot-toast"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
const Welcome = styled.div`
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
`;

const HotelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  padding: 0px 20px;
  @media screen and (max-width: 800px){
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
  @media screen and (max-width: 465px){
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
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
  // height: 250px;
  object-fit: cover;
  display: block;  
  margin: 0 auto;
`;

const HotelInfo = styled.div`
  padding: 0px 15px;
  magin:0px;
`;

const HotelName = styled.h3`
  margin: 0px;
  padding:5px 0px;
  font-size: 26px;
`;

const HotelAddress = styled.p`
  font-size: 14px;
  margin: 0px;
  padding:5px 0px;
  color: #8D4B38;
;
`;

const HotelPrice = styled.p`
  font-size: 15px;
  margin: 0px;
  padding:5px 0px;
  font-weight: bold;
  color: #000;
`;
const HotelFooter = styled.div`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-around;
  color: white;
`;
const HotelEdit = styled.button`
  width: 40px;
  height: 30px;
  background-color: #4361ee;
  display:flex;
  align-items: center;
  cursor: pointer;
  border-radius: 1rem;
  justify-content: center;
`;
const HotelDelete = styled.button`
  width: 40px;
  height: 30px;
  background-color: #d80032;
  display:flex;
  cursor: pointer;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
`;
const Button1 = styled.button`
  padding: 10px 20px;
  background-color: transparant;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hotelToEdit, setHotelToEdit] = useState(null);
  const fetchHotels = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/hotel`, {
        credentials: 'include',
      });

      if (!response.ok) {
        setError('Erreur lors de la récupération des hôtels')
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length >= 0) {
        setHotels(data);
      } else {
        setError('Données des hôtels non valides')
      }
    } catch (error) {
      setError('Erreur serveur. Veuillez réessayer plus tard.')
    }
  };
  useEffect(() => {
    fetchHotels();
  }, []);
  useEffect(() => {
    if (error) {
      toast.error(error);
      setError("");
    }
  }, [error]);
  const handleEdit = (hotel) => {
    setHotelToEdit(hotel);
    setShowModal(true);
  };
  const resetHotelToEdit = () => {
    setHotelToEdit(null);
  };
  const handleClose = () => {
    resetHotelToEdit();
    setShowModal(false)
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet hôtel ?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/hotel/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de l\'hôtel');
      }

      fetchHotels();
      toast.success('Hôtel supprimé avec succès');
    } catch (error) {
      toast.error(`Erreur lors de la suppression de l\'hôtel ${error}`);
    }
  };

  return (

    <LayoutHome>
      <Welcome>
        <h2>Hôtels <span>({hotels.length})</span></h2>
        <Button1 onClick={() => setShowModal(true)}>
          <FaPlus /> Créer un nouvel hôtel
        </Button1>
        <Modal
          show={showModal}
          onClose={() => handleClose()}
          refreshHotels={fetchHotels}
          hotelToEdit={hotelToEdit}
        />
      </Welcome>
      <HotelGrid>
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id}>
            <HotelImage src={`${hotel.image}`} alt={hotel.nom} />
            <HotelInfo>
              <HotelAddress>{hotel.adresse}</HotelAddress>
              <HotelName>{hotel.nom}</HotelName>
              <HotelPrice>{hotel.prix} {hotel.devise} par nuit</HotelPrice>
            </HotelInfo>
            <HotelFooter>
              <HotelEdit onClick={() => handleEdit(hotel)}>
                <FaEdit />
              </HotelEdit>
              <HotelDelete onClick={() => handleDelete(hotel._id)}>
                <MdDelete />
              </HotelDelete>
            </HotelFooter>
          </HotelCard>
        ))}
      </HotelGrid>
    </LayoutHome>
  );
}

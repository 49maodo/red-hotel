"use client";
import { useEffect, useState } from 'react';
import LayoutHome from '../layoutHome';
import Modal from '@/components/Modal';
import toast from "react-hot-toast"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Welcome ,HotelAddress,HotelGrid,HotelCard,HotelImage,HotelInfo,HotelName,
HotelPrice,HotelFooter,HotelEdit, HotelDelete,Button1 } from '@/styles/hotel.style';

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
        <h2>Hôtels <span>{hotels.length}</span></h2>
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

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GrLinkPrevious } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import toast from "react-hot-toast"
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; 
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 900px;
  max-width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 90%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  &.file {
    border: 2px solid red;
    max-height: 200px;
  }
`;

const Label = styled.label`
  margin: 8px 0;
  display: block;
  font-weight: bold;
`;

const StyledSelect = styled.select`
  width: 90%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  & > div {
    flex: 1;
  }
`;


const Modal = ({ show, onClose, refreshHotels }) => {
    const [formData, setFormData] = useState({
        nom: '',
        adresse: '',
        email: '',
        numTel: '',
        prix: '',
        devise: 'XOF',
        image: '',
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSubmit = new FormData();
        for (const key in formData) {
            formDataToSubmit.append(key, formData[key]);
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/hotel/create`, {
                method: 'POST',
                credentials: 'include',
                body: formDataToSubmit,
            });

            const responseData = await response.json();

            if (response.ok) {
                console.log('Hôtel créé avec succès:', responseData);
                toast.success('Hôtel créé avec succès')
                refreshHotels(); // Appelle la fonction pour rafraîchir la liste des hôtels
                onClose();
            } else {
                setErrorMessage(responseData.message);
                console.error('Erreur lors de la création de l\'hôtel:', responseData);
            }
        } catch (error) {
            setErrorMessage('Erreur réseau, veuillez réessayer.');
            console.error('Erreur réseau:', error);
        }
    };
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
            setErrorMessage("");
        }
    }, [errorMessage]);
    if (!show) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <h2>
                    <Button onClick={onClose} style={{ marginTop: '10px' }}>
                        <GrLinkPrevious />
                    </Button>
                    Créer un nouvel hôtel
                </h2>
                <form onSubmit={handleSubmit}>
                    <FieldRow>
                        <div>
                            <Label>Nom de l&apos;hôtel</Label>
                            <Input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label>Adresse</Label>
                            <Input type="text" name="adresse" value={formData.adresse} onChange={handleChange} required />
                        </div>
                    </FieldRow>
                    <FieldRow>
                        <div>
                            <Label>E-mail</Label>
                            <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label>Numéro de téléphone</Label>
                            <Input type="tel" name="numTel" value={formData.numTel} onChange={handleChange} required />
                        </div>
                    </FieldRow>
                    <FieldRow>
                        <div>
                            <Label>Prix par nuit</Label>
                            <Input type="number" name="prix" value={formData.prix} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label>Devise</Label>
                            <StyledSelect name="devise" value={formData.devise} onChange={handleChange}>
                                <option value="XOF">Franc CFA (XAF)</option>
                                <option value="Dollar">Dollar Américain (USD)</option>
                                <option value="Euro">Euro (EUR)</option>
                            </StyledSelect>
                        </div>
                    </FieldRow>
                    <Label>Ajouter une photo</Label>
                    <Input className="file" type="file" accept="image/*" onChange={handleFileChange} required />
                    <Button type="submit">Enregistrer</Button>
                    {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

const HotelModal = ({ refreshHotels }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Button onClick={() => setShowModal(true)}>
                <FaPlus /> Créer un nouvel hôtel
            </Button>
            <Modal show={showModal} onClose={() => setShowModal(false)} refreshHotels={refreshHotels} />
        </div>
    );
};

export default HotelModal;


import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GrLinkPrevious } from "react-icons/gr";
import { Roller } from 'react-css-spinners'
import toast from "react-hot-toast"
const ModalOverlay = styled.div`
  z-index: 100;
  position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid red;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border: 2px solid blue;
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
const Button1 = styled.button`
  padding: 10px 20px;
  background-color: transparant;
  border: 2px solid black;
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

const Modal = ({ show, onClose, refreshHotels, hotelToEdit }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        adresse: '',
        email: '',
        numTel: '',
        prix: '',
        devise: 'XOF',
        image: '',
    });
    useEffect(() => {
        if (hotelToEdit) {
            setFormData({
                nom: hotelToEdit.nom || '',
                adresse: hotelToEdit.adresse || '',
                email: hotelToEdit.email || '',
                numTel: hotelToEdit.numTel || '',
                prix: hotelToEdit.prix || '',
                devise: hotelToEdit.devise || 'XOF',
                image: '',
            });
        } else {
            setFormData({
                nom: '',
                adresse: '',
                email: '',
                numTel: '',
                prix: '',
                devise: 'XOF',
                image: '',
            });
        }
    }, [hotelToEdit]);
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
        setIsLoading(true);
        const formDataToSubmit = new FormData();
        for (const key in formData) {
            formDataToSubmit.append(key, formData[key]);
        }
        const method = hotelToEdit ? 'PUT' : 'POST';

        const url = hotelToEdit
            ? `${process.env.NEXT_PUBLIC_BACK_END}/hotel/edit/${hotelToEdit._id}`
            : `${process.env.NEXT_PUBLIC_BACK_END}/hotel/create`;

        console.log('method ', method)
        console.log('url ', url)
        try {

            const response = await fetch(url, {
                method: method,
                credentials: 'include',
                body: formDataToSubmit,
            });

            const responseData = await response.json();

            if (response.ok) {
                console.log('Hôtel créé avec succès:', responseData);
                toast.success(hotelToEdit ? 'Hôtel modifié avec succès' : 'Hôtel créé avec succès');
                refreshHotels();
                onClose();
            } else {
                setErrorMessage(responseData.message);
                console.error('Erreur lors de la création de l\'hôtel:', responseData);
            }
        } catch (error) {
            setErrorMessage(responseData.message || 'Erreur réseau, veuillez réessayer.');
            console.error('Erreur réseau:', error);
        } finally {
            setIsLoading(false);
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
                    {hotelToEdit ? 'Modifier l\'hôtel' : 'Créer un nouvel hôtel'}
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
                    <Input className="file" type="file" accept="image/*" onChange={handleFileChange}
                    />
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? <span>Loading <Roller size={15}/> </span> : (hotelToEdit ? 'Mettre à jour' : 'Enregistrer')}
                    </Button> 
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};
export default Modal
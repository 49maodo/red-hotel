import { useState, useEffect } from 'react';
import { GrLinkPrevious } from "react-icons/gr";
import { FaRegImage } from "react-icons/fa6";
import { Roller } from 'react-css-spinners'
import toast from "react-hot-toast"
import { ModalOverlay, ModalContent,Button, Input, Label,StyledSelect, FieldRow } from '@/styles/modal.style';

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
        if (hotelToEdit && hotelToEdit.image) {
            console.log("Image de hotelToEdit :", hotelToEdit.image);
            document.querySelector(
                ".hotel_image"
            ).style.backgroundImage = `url(${hotelToEdit.image})`;
            document.querySelector(".hotel_image").style.backgroundSize = "cover";
            document.querySelector(".hotel_image").style.backgroundPosition = "center";
        }
    }, [hotelToEdit]);
    const [errorMessage, setErrorMessage] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });

        if (e.target.files[0]) {
            const imageURL = URL.createObjectURL(e.target.files[0]);
            document.querySelector(
                ".hotel_image"
            ).style.backgroundImage = `url(${imageURL})`;
            document.querySelector(".hotel_image").style.backgroundSize = "cover";
            document.querySelector(".hotel_image").style.backgroundPosition = "center";
        }
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
                    <GrLinkPrevious onClick={onClose} style={{ marginTop: '15px' }} />
                    {hotelToEdit ? 'Modifier l\'hôtel' : 'Créer un nouvel hôtel'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <FieldRow>
                        <div>
                            <Label>Nom de l&apos;hôtel</Label>
                            <Input type="text" name="nom" value={formData.nom} onChange={handleChange}
                            placeholder="Nom de l&apos;hôtel" required />
                        </div>
                        <div>
                            <Label>Adresse</Label>
                            <Input type="text" name="adresse" value={formData.adresse} onChange={handleChange}
                                placeholder="Adresse" required />
                        </div>
                    </FieldRow>
                    <FieldRow>
                        <div>
                            <Label>E-mail</Label>
                            <Input type="email" name="email" value={formData.email} onChange={handleChange}
                            placeholder="E-mail" required />
                        </div>
                        <div>
                            <Label>Numéro de téléphone</Label>
                            <Input type="tel" name="numTel" value={formData.numTel} onChange={handleChange}
                            placeholder="Numéro de téléphone" required />
                        </div>
                    </FieldRow>
                    <FieldRow>
                        <div>
                            <Label>Prix par nuit</Label>
                            <Input type="number" name="prix" value={formData.prix} onChange={handleChange}
                            placeholder="Prix par nuit" required />
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
                    <FieldRow className="hotel_image">
                        <Label>Ajouter une photo</Label>
                        <FaRegImage />
                        <Input className="file" type="file" accept="image/*" onChange={handleFileChange} />
                    </FieldRow>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? <span>Loading <Roller size={15} /> </span> : (hotelToEdit ? 'Mettre à jour' : 'Enregistrer')}
                    </Button>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};
export default Modal
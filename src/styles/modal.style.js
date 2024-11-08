import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 100;
  position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 0 20px 10px 20px;
  border-radius: 8px;
  width: 900px;
  max-width: 100%;
  box-sizing: border-box;

  & h2{
    padding-bottom: 10px;
    border-bottom: 2px dotted #DDDDDD;
  }
`;

export const Button = styled.button`
  margin-top: 7px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &.file {
    position: absolute;
    top: auto;
    left: auto;
    width: 90%;
    height: 80%;
    text-align: center;
    transform: translateY(-3%);
    cursor: pointer;
    opacity: 0;
  }
`;

export const Label = styled.label`
  margin: 8px 0;
  display: block;
  font-weight: bold;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  & > div {
    flex: 1;
  }
  &.hotel_image{
    margin-top: 10px;
    height: 200px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 30px;
    color: #ccc;
  }
  
  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 0px;
  }
`;
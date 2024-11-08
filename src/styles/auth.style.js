import styled from "styled-components";

export const ContainerAuth = styled.div`
  margin: 0;
  padding: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/image/bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const AuthTitle = styled.div`
  color: #FFFFFF;
  display: flex;
  padding: 0px;
  margin: 0 0 20px 0;
  justify-content: center;
  align-items: center;
  gap: 5px;
  & img{
    width: 1.5rem;
    margin: 0px;
    padding: 0px 0px 20px 0px;
  }
  & h1{
    margin: 0px;
    font-size: 1.5rem;
    padding: 0px 0px 20px 0px;
  }
`;
export const AuthContainer = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 260px;

  & form div.text{
  margin: 0 0  7px 0;
  }
`;
export const AuthFooter = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
  a {
    color: #FFD700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #CCCCCC;
  border-radius: 1px;
  box-sizing: border-box;
  outline: none;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #666666;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  min-height: 40px;
  background-color: #4A4A4A;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  & span.load{
    gap: 7px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: #3A3A3A;
  }
`;



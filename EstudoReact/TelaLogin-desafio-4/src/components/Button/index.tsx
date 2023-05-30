import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  console.log("Botão desabilitado? ", disabled);
  return <ButtonContainer disabled={disabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;

import { ButtonProps } from "antd";
import { ButtonAntd } from "./button.styles";

interface ButtoncurrentProps extends ButtonProps {
    margin?: string
}

const Button = ({margin, ...props}: ButtoncurrentProps) => {
    return <ButtonAntd style={{margin}} {...props} />
};

export default Button;
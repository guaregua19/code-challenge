import { IButtonProps } from "../interfaces/Button";

const Button = ({label, onButtonClicked}: IButtonProps) => {
    return (
        <div className="button" onClick={onButtonClicked}>
            {label}
        </div>
    )
}

export default Button;
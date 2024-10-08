import { Button } from "@mui/material";

interface ButtonProps {
  label: string;
  isRef: boolean;
  anchor?: string;
  type?: "contained" | "outlined";
  onClick?: () => void;
}

const CommerceButton: React.FC<ButtonProps> = ({
  label,
  type,
  isRef,
  anchor = "#",
  onClick,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <Button
      variant={type}
      {...(isRef
        ? { href: anchor }
        : {
            onClick: () => handleClick(),
          })}
    >
      {label}
    </Button>
  );
};

export default CommerceButton;

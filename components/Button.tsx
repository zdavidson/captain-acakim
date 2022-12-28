import { Button as MuiButton, SxProps, Theme } from "@mui/material";

interface Props {
  text: string;
  sx?: SxProps<Theme> | undefined;
}

const Button = ({ text, sx }: Props) => {
  const buttonSx: SxProps<Theme> = {
    fontFamily: "Zilla Slab, serif",
    fontWeight: 700,
    color: "#F5F5F5",
    textTransform: "capitalize",
    border: "1px solid #F5F5F5",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "0.5rem 1rem",
    "&:hover": {
      color: "#111111",
      border: "1px solid #111111",
      background: "#f5f5f5",
    },
    "@media screen and (max-width: 575px)": {
      fontSize: "1.5rem",
    },
  };

  return (
    <MuiButton
      sx={{
        ...sx,
        ...buttonSx,
      }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;

import { Box, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardType = {
    children: string;
    Icon: JSX.Element;
};
const Card: React.FC<CardType> = ({ Icon, children }) => {
    const n = useNavigate();
    return (
        <Stack
            width="100%"
            justifyContent="center"
            alignItems="center"
            sx={{
                backgroundColor: "secondary.light",
                position: "relative",
                overflow: "hidden",
                transition: ".3s",
                cursor: "pointer",
                "&:hover": {
                    backgroundColor: "secondary.dark",
                },
            }}
            onClick={() =>
                n(
                    "/CYs_PanotourPro_Plugin/plugins/" +
                        children.replace(/\s*/g, "")
                )
            }
        >
            <Stack
                width="80%"
                height="120px"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <img
                    src={require("../assets/images/ripple.png")}
                    alt="ripple"
                    style={{
                        position: "absolute",
                        top: "0px",
                        left: "-150px",
                        width: "300px",
                        pointerEvents: "none",
                    }}
                />
                <img
                    src={require("../assets/images/ripple.png")}
                    alt="ripple"
                    style={{
                        position: "absolute",
                        top: "-200px",
                        right: "-170px",
                        width: "350px",
                        transform: "rotate(180deg)",
                        pointerEvents: "none",
                    }}
                />
                <Box color="common.white">{Icon}</Box>
                <Typography
                    color="common.white"
                    variant="body1"
                    width="50%"
                    style={{
                        display: "inline-block",
                        whiteSpace: "pre-line",
                        wordBreak: "break-word",
                    }}
                    textAlign="center"
                >
                    {children}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Card;

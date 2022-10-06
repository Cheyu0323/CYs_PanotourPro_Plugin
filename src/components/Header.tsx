import { Stack, Typography, Box } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const n = useNavigate();
    const [menuClick, setMenuClick] = useState<boolean>(false);
    const handleMenuClick = () => {
        setMenuClick(!menuClick);
    };
    return (
        <Stack
            direction="row"
            paddingY="10px"
            justifyContent="space-between"
            alignItems="center"
            position="sticky"
            top="0"
            sx={{
                zIndex: "900",
                backgroundColor: "secondary.main",
            }}
        >
            <Typography
                variant="body1"
                component="div"
                letterSpacing={2}
                color="common.white"
                sx={{ cursor: "pointer" }}
                onClick={() => n("/CYs_PanotourPro_Plugin/")}
            >
                PANOTOURPLUGIN
            </Typography>
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                width={{ md: "auto", xs: "100%" }}
                overflow="hidden"
                sx={{
                    display: { md: "block" },
                    position: { md: "relative", xs: "absolute" },
                    top: { md: "0px", xs: "43px" },
                    left: "0",
                    transition: ".3s",
                    maxHeight: menuClick ? "100px" : "0",
                    padding: menuClick
                        ? "6px 24px"
                        : { md: "0px", xs: "0 24px" },
                    backgroundColor: "secondary.main",
                    boxSizing: "border-box",
                }}
            >
                <Typography
                    variant="body1"
                    component="span"
                    color="grey.300"
                    letterSpacing={1}
                    fontWeight={100}
                    onClick={() => {
                        n("/CYs_PanotourPro_Plugin/plugins");
                        setMenuClick(false);
                    }}
                    sx={{
                        transition: ".3s",
                        cursor: "pointer",
                        "&:hover": {
                            color: "common.white",
                            fontWeight: "500",
                        },
                    }}
                >
                    PLUGINS
                </Typography>
                <Typography
                    variant="body1"
                    component="span"
                    color="grey.300"
                    letterSpacing={1}
                    fontWeight={100}
                    onClick={() => {
                        n("/CYs_PanotourPro_Plugin/tutorial");
                        setMenuClick(false);
                    }}
                    sx={{
                        transition: ".3s",
                        cursor: "pointer",
                        "&:hover": {
                            color: "common.white",
                            fontWeight: "500",
                        },
                    }}
                >
                    TUTORIAL
                </Typography>
            </Stack>
            <Stack sx={{ display: { md: "none", xs: "block" } }}>
                <MenuOutlinedIcon
                    onClick={handleMenuClick}
                    sx={{
                        color: "grey.300",
                        fontSize: "20px",
                        transition: ".3s",
                        cursor: "pointer",
                        "&:hover": {
                            color: "common.white",
                        },
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default Header;

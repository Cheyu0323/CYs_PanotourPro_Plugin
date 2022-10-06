import { Box, Typography, Stack, Button } from "@mui/material";
import PluginCards from "../components/PluginCards";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const n = useNavigate()
    return (
        <Stack direction="column" flexWrap="wrap" alignItems="center">
            <Box width="100%" paddingY={{md: "3%", xs: "8%" }}>
                <Typography
                    color="common.white"
                    variant="h4"
                    component="div"
                    textAlign="center"
                    lineHeight="50px"
                    fontWeight="900"
                    paddingBottom={{md: "0%", xs: "3%" }}
                >
                    Make Panotour Pro Great Again
                </Typography>
                <Typography
                    color="common.white"
                    variant="body1"
                    component="div"
                    textAlign="center"
                >
                    透過 Plugin 進行環景開發減少對程式的依賴，填寫相關參數快速搭建環景網頁
                </Typography>
            </Box>
            <PluginCards />
            <Box
                width="100%"
                sx={{ maxWidth: "lg" }}
                paddingTop="3%"
                textAlign="center"
                paddingBottom={{md: "0%", xs: "3%" }}
            >
                <Button
                    variant="contained"
                    disableElevation
                    color="info"
                    sx={{
                        color: "common.white",
                        borderRadius: "3px",
                        width: "200px",
                        fontWeight: 700,
                        letterSpacing: 1.2
                    }}
                    onClick={() => n("/tutorial")}
                >
                    HOW TO USE
                </Button>
            </Box>
        </Stack>
    );
};

export default Index;

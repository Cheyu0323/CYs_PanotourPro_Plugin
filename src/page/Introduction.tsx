import { Box, Typography, Stack, Grid } from "@mui/material";
import PluginCards from "../components/PluginCards";
import { useNavigate } from "react-router-dom";

type IntroductionType = {
    type: string;
};
type CardType = {
    children: string;
};
const Cards = () => {
    const n = useNavigate();
    return (
        <Box width="100%" sx={{ maxWidth: "lg" }}>
            <Grid container spacing={2}>
                <Grid
                    item
                    md={4}
                    sm={6}
                    xs={6}
                    onClick={() => n("/tutorial/page1")}
                >
                    <Card>Panotour Pro 操作介面</Card>
                </Grid>
                <Grid
                    item
                    md={4}
                    sm={6}
                    xs={6}
                    onClick={() => n("/tutorial/page2")}
                >
                    <Card>加入 Plugin</Card>
                </Grid>
            </Grid>
        </Box>
    );
};
const Card: React.FC<CardType> = ({ children }) => {
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
        >
            <Stack
                width="100%"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                height="120px"
            >
                <Typography
                    color="common.white"
                    variant="body1"
                    width="100%"
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

const Introduction: React.FC<IntroductionType> = ({ type }) => {
    return (
        <Stack direction="column" flexWrap="wrap" alignItems="center">
            <Box width="100%" paddingY={{ md: "3%", xs: "8%" }}>
                <Typography
                    color="common.white"
                    variant="h4"
                    component="div"
                    textAlign="center"
                    lineHeight="50px"
                    fontWeight="900"
                    paddingBottom={{ md: "0%", xs: "3%" }}
                >
                    {type}
                </Typography>
            </Box>
            {type === "Plugins" ? <PluginCards /> : <Cards />}
        </Stack>
    );
};

export default Introduction;

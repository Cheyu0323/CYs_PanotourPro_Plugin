import { Box, Typography, Stack, Grid } from "@mui/material";
import pluginInfo from "../data/plugininfo";
import { useParams, useNavigate } from "react-router-dom";

const Plugin: React.FC = () => {
    const n = useNavigate();
    const paramsTitle = useParams().title;
    const pluginFindIndex = pluginInfo.findIndex(
        (item) => item.link === paramsTitle
    );
    const pluginData = pluginInfo[pluginFindIndex];
    const pluginPreData = pluginInfo[pluginFindIndex - 1];
    const pluginNextData = pluginInfo[pluginFindIndex + 1];
    let Icon = pluginData.icon;
    return (
        <Box
            sx={{ maxWidth: "lg", width: { md: "80%", sx: "100%" } }}
            margin="auto"
        >
            <Box paddingTop="3%" paddingBottom="1%">
                <Stack
                    direction="row"
                    spacing={{ xs: 2, md: 4 }}
                    alignItems="center"
                >
                    <Box color="common.white">
                        <Icon sx={{ fontSize: "45px" }} />
                    </Box>
                    <Typography
                        color="common.white"
                        variant="h5"
                        fontWeight="700"
                        textAlign="center"
                    >
                        {pluginData.title}
                    </Typography>
                </Stack>
            </Box>
            <Box paddingY="1%">
                <Typography
                    color="common.white"
                    variant="body1"
                    lineHeight="25px"
                    letterSpacing="1px"
                >
                    {pluginData.info}
                </Typography>
            </Box>
            {pluginData.fun !== undefined && (
                <Box>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 1, md: 5 }}
                        alignItems="flex-start"
                    >
                        <Typography
                            color="common.white"
                            variant="body1"
                            fontWeight="900"
                        >
                            方法
                        </Typography>
                        <Grid
                            container
                            width={{ xs: "100%", md: "80%" }}
                            rowSpacing={0.5}
                            alignItems="center"
                        >
                            {pluginData.fun?.map((item) => {
                                return (
                                    <Grid item xs={6} key={item.id}>
                                        <Typography
                                            color="common.white"
                                            variant="body1"
                                        >
                                            {item.fun}
                                        </Typography>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Stack>
                </Box>
            )}
            {pluginData.iframe !== undefined && (
                <Box
                    component="iframe"
                    width="100%"
                    margin="auto"
                    height="550px"
                    marginY="2%"
                    src={pluginData.iframe}
                ></Box>
            )}
            {pluginData.pic !== undefined && (
                <Box>
                    {pluginData.pic.map((item) => {
                        return (
                            <Box
                                key={item.id}
                                width="100%"
                                margin="auto"
                                marginY="2%"
                            >
                                <Box
                                    component="img"
                                    width="100%"
                                    alt={pluginData.title + "介面"}
                                    src={item.url}
                                />
                            </Box>
                        );
                    })}
                </Box>
            )}
            <Box
                marginY="5%"
                sx={{ borderTop: 1, borderColor: "secondary.light" }}
            >
                <Stack
                    direction="row"
                    justifyContent={
                        pluginPreData !== undefined ? "flex-start" : "flex-end"
                    }
                >
                    {pluginPreData !== undefined ? (
                        <Stack
                            direction="column"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            width="50%"
                            paddingY="2%"
                            sx={{
                                transition: ".5s",
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "secondary.light",
                                },
                            }}
                            onClick={() => n("/plugins/" + pluginPreData.link)}
                        >
                            <Typography
                                color="common.white"
                                variant="body1"
                                fontWeight="900"
                                letterSpacing="1.5px"
                                paddingX="1%"
                            >
                                {pluginPreData.title}
                            </Typography>
                            <Typography
                                color="common.white"
                                variant="body2"
                                paddingX="1%"
                            >
                                PREVIOUS
                            </Typography>
                        </Stack>
                    ) : (
                        ""
                    )}
                    {pluginNextData !== undefined ? (
                        <Stack
                            direction="column"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            width="50%"
                            paddingY="2%"
                            sx={{
                                transition: ".5s",
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "secondary.light",
                                },
                            }}
                            onClick={() => n("/plugins/" + pluginNextData.link)}
                        >
                            <Typography
                                color="common.white"
                                variant="body1"
                                fontWeight="900"
                                letterSpacing="1.5px"
                                paddingX="1%"
                            >
                                {pluginNextData.title}
                            </Typography>
                            <Typography
                                color="common.white"
                                variant="body2"
                                paddingX="1%"
                            >
                                NEXT
                            </Typography>
                        </Stack>
                    ) : (
                        ""
                    )}
                </Stack>
            </Box>
        </Box>
    );
};

export default Plugin;

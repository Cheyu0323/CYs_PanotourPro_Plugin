import { Box, Grid, } from "@mui/material";
import Card from "../components/Card";
import pluginInfo from "../data/plugininfo";

const PluginCards = () => {
    return (
        <Box width="100%" sx={{ maxWidth: "lg" }}>
            <Grid container spacing={2}>
                {pluginInfo.map((item) => {
                    let Icon = item.icon;
                    return (
                        <Grid key={item.id} item md={4} sm={6} xs={6}>
                            <Card Icon={<Icon sx={{ fontSize: "40px" }} />}>
                                {item.title}
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default PluginCards;

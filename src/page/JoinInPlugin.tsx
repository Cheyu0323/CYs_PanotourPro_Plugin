import { Box, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const JoinInPlugin = () => {
    const n = useNavigate();
    return (
        <Box sx={{ maxWidth: "lg" }} margin="auto">
            <Box paddingTop="3%" paddingBottom="1%">
                <Typography
                    color="common.white"
                    variant="h5"
                    fontWeight="900"
                    textAlign="center"
                    letterSpacing={1.5}
                >
                    加入 Plugin
                </Typography>
            </Box>
            <Box>
                <Typography
                    color="common.white"
                    variant="h6"
                    letterSpacing={1}
                    textAlign="left"
                    fontWeight="700"
                >
                    新增 Plugin
                </Typography>
                <Box>
                    <Box
                        width={{ md: "70%", sx: "100%" }}
                        margin="auto"
                        marginY="2%"
                    >
                        <Typography
                            color="common.white"
                            variant="body1"
                            letterSpacing={1}
                            textAlign="left"
                            lineHeight="30px"
                        >
                            {
                                "開啟 Panotour Pro > 右上角 Edit > Open user directory"
                            }
                        </Typography>
                        <Box
                            component="img"
                            width="100%"
                            alt="Home 介面設定"
                            src={require("../assets/images/tutorial/tutorial7.png")}
                        />
                    </Box>
                </Box>
                <Box>
                    <Box
                        width={{ md: "70%", sx: "100%" }}
                        margin="auto"
                        marginY="2%"
                    >
                        <Typography
                            color="common.white"
                            variant="body1"
                            letterSpacing={1}
                            textAlign="left"
                            lineHeight="30px"
                        >
                            開啟 plugins 資料夾將 plugin 檔案拖曳至資料夾中
                        </Typography>
                        <Box
                            component="img"
                            width="100%"
                            alt="Home 介面設定"
                            src={require("../assets/images/tutorial/tutorial8.png")}
                        />
                    </Box>
                </Box>
                <Box>
                    <Box
                        width={{ md: "70%", sx: "100%" }}
                        margin="auto"
                        marginY="2%"
                    >
                        <Typography
                            color="common.white"
                            variant="body1"
                            letterSpacing={1}
                            textAlign="left"
                            lineHeight="30px"
                        >
                            重啟 Panotour Pro 後在右側即可看到所新增的 plugin
                        </Typography>
                        <Box
                            component="img"
                            width="100%"
                            alt="Home 介面設定"
                            src={require("../assets/images/tutorial/tutorial9.png")}
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                marginY="5%"
                sx={{ borderTop: 1, borderColor: "secondary.light" }}
            >
                <Stack direction="row" justifyContent="flex-start">
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
                        onClick={() => n("/tutorial/page1")}
                    >
                        <Typography
                            color="common.white"
                            variant="body1"
                            fontWeight="900"
                            letterSpacing="1.5px"
                            paddingX="1%"
                        >
                            Panotour Pro 操作介面
                        </Typography>
                        <Typography
                            color="common.white"
                            variant="body2"
                            paddingX="1%"
                        >
                            PREVIOUS
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default JoinInPlugin;

import { Box, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Operate = () => {
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
                    Panotour Pro 操作介面
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
                    Home
                </Typography>
                <Typography
                    color="common.white"
                    variant="body1"
                    letterSpacing={1}
                    textAlign="left"
                    lineHeight="30px"
                >
                    Panotour Pro 檔案選擇
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
                            textAlign="center"
                            lineHeight="30px"
                        >
                            基本介面
                        </Typography>
                        <Box
                            component="img"
                            width="100%"
                            alt="Home 介面設定"
                            src={require("../assets/images/tutorial/tutorial6.png")}
                        />
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography
                    color="common.white"
                    variant="h6"
                    letterSpacing={1}
                    textAlign="left"
                    fontWeight="700"
                >
                    Tour
                </Typography>
                <Typography
                    color="common.white"
                    variant="body1"
                    letterSpacing={1}
                    textAlign="left"
                    lineHeight="30px"
                >
                    設定場景、擺放熱點
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
                            textAlign="center"
                            lineHeight="30px"
                        >
                            基本介面
                        </Typography>
                        <Box
                            component="img"
                            width="100%"
                            alt="Tour 介面設定"
                            src={require("../assets/images/tutorial/tutorial1.png")}
                        />
                    </Box>
                    <Box
                        width={{ md: "70%", sx: "100%" }}
                        margin="auto"
                        marginY="2%"
                    >
                        <Typography
                            color="common.white"
                            variant="body1"
                            letterSpacing={1}
                            textAlign="center"
                            lineHeight="30px"
                        >
                            取得場景資訊
                        </Typography>
                        <Box
                            component="img"
                            width="100%"
                            alt="Tour - 取得場景資訊"
                            src={require("../assets/images/tutorial/tutorial2.png")}
                        />
                    </Box>
                    <Box
                        width={{ md: "70%", sx: "100%" }}
                        margin="auto"
                        marginY="2%"
                    >
                        <Typography
                            color="common.white"
                            variant="body1"
                            letterSpacing={1}
                            textAlign="center"
                            lineHeight="30px"
                        >
                            調整熱點觸發事件
                        </Typography>
                        <Box
                            component="img"
                            width="100%"
                            alt="Tour - 調整熱點觸發事件"
                            src={require("../assets/images/tutorial/tutorial3.png")}
                        />
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography
                    color="common.white"
                    variant="h6"
                    letterSpacing={1}
                    textAlign="left"
                    fontWeight="700"
                >
                    Style
                </Typography>
                <Typography
                    color="common.white"
                    variant="body1"
                    letterSpacing={1}
                    textAlign="left"
                    lineHeight="30px"
                >
                    樣式設定、Plugin 使用
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
                            textAlign="center"
                            lineHeight="30px"
                        >
                            基本介面
                        </Typography>
                        <Box
                            component="img"
                            width="100%"
                            alt="Style 介面設定"
                            src={require("../assets/images/tutorial/tutorial4.png")}
                        />
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography
                    color="common.white"
                    variant="h6"
                    letterSpacing={1}
                    textAlign="left"
                    fontWeight="700"
                >
                    Build
                </Typography>
                <Typography
                    color="common.white"
                    variant="body1"
                    letterSpacing={1}
                    textAlign="left"
                    lineHeight="30px"
                >
                    環景網頁匯出
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
                            textAlign="center"
                            lineHeight="30px"
                        >
                            基本介面
                        </Typography>
                        <Box
                            component="img"
                            width="100%"
                            alt="Build 匯出"
                            src={require("../assets/images/tutorial/tutorial5.png")}
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                marginY="5%"
                sx={{ borderTop: 1, borderColor: "secondary.light" }}
            >
                <Stack direction="row" justifyContent="flex-end">
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
                        onClick={() => n("/tutorial/page2")}
                    >
                        <Typography
                            color="common.white"
                            variant="body1"
                            fontWeight="900"
                            letterSpacing="1.5px"
                            paddingX="1%"
                        >
                            加入 Plugin
                        </Typography>
                        <Typography
                            color="common.white"
                            variant="body2"
                            paddingX="1%"
                        >
                            NEXT
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default Operate;

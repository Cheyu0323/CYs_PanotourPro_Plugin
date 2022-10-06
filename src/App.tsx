import { Container, createTheme, ThemeProvider } from "@mui/material";
import { RouteObject, useRoutes } from "react-router-dom";
import Index from "./page/Index";
import Introduction from "./page/Introduction";
import Plugin from "./page/Plugin";
import Operate from "./page/Operate";
import JoinInPlugin from "./page/JoinInPlugin";
import Header from "./components/Header";

const theme = createTheme({
    palette: {
        secondary: {
            main: "#211613",
            light: "#423D3B",
            dark: "#2D2422",
        },
        info: {
            main: "#FFC000",
        },
    },
});

const routerConfig: RouteObject[] = [
    {
        path: "/CYs_PanotourPro_Plugin/",
        element: <Index />,
    },
    {
        path: "/plugins",
        element: <Introduction type="Plugins" />,
    },
    {
        path: "/tutorial",
        element: <Introduction type="Tutorial" />,
    },
    {
        path: "/tutorial/page1",
        element: <Operate />,
    },
    {
        path: "/tutorial/page2",
        element: <JoinInPlugin />,
    },
    {
        path: "/plugins/:title",
        element: <Plugin />,
    },
];

const App = () => {
    const router = useRoutes(routerConfig);
    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={{
                    backgroundColor: "secondary.main",
                    border: 1,
                    borderColor: "secondary.main",
                    height: "100%",
                }}
                maxWidth="xl"
            >
                <Header />
                {router}
            </Container>
        </ThemeProvider>
    );
};

export default App;

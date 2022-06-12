import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import CreateMessage from "../Message/Create/CreateMessage";
import setTheme from "../ThemeProvider/ThemeSetter";
import {ThemeProvider} from "@emotion/react";
import ResponsiveAppBar from "../AppBar/AppBar";
import {createTheme, Grid} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function AppContainer() {
    const ligthTheme = createTheme(
        {
            palette: {
                mode: "light",
                primary: {
                    main: "#532973"
                },
                secondary: {
                    main: "#484d6d"
                },
                error: {
                    main: "#e64040"
                },
                warning: {
                    main: "#e67053"
                },
                info: {
                    main: "#532973"
                },
                success: {
                    main: "#57A773"
                },
                text: {
                    primary: "#0d0117",
                    secondary: "rgba(13, 1, 23, 0.5)",
                    disabled: "rgba(13, 1, 23, 0.30)"
                },
                background: {
                    paper: "#EFE9F4",
                    default: "#EFE9F4"
                }
            }
        }
    );

    const darkTheme = createTheme(
        {
            palette: {
                mode: "light",
                primary: {
                    main: "#532973"
                },
                secondary: {
                    main: "#484d6d"
                },
                error: {
                    main: "#e64040"
                },
                warning: {
                    main: "#e67053"
                },
                info: {
                    main: "#532973"
                },
                success: {
                    main: "#57A773"
                },
                text: {
                    primary: "#0d0117",
                    secondary: "#08B2E3",
                    disabled: "rgba(13, 1, 23, 0.30)"
                },
                background: {
                    paper: "#EFE9F4",
                    default: "#EFE9F4"
                }
            }
        }
    );

    const [ligth, setLigth] = React.useState(true)
    const theme = ligth ? ligthTheme : darkTheme;

    const ThemeSetter = ({children}) => (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );

    const SetBox = ({children}) => (
        <Box sx={{p: 2}}>
            {children}
        </Box>
    );

    return (<ThemeSetter children={
        <>
            <CssBaseline/>
            <ResponsiveAppBar/>
            <Container maxWidth={"xl"}>
                <SetBox children={
                    <Grid container justifyContent={"center"} spacing={0}>
                        <Grid item xs={12}>
                            <CreateMessage/>
                        </Grid>
                    </Grid>
                }></SetBox>

            </Container>
        </>
    }></ThemeSetter>);
}

export default AppContainer;
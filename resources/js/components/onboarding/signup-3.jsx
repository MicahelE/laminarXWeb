import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link as CustomLink } from "react-router-dom";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "../listItems";
import SignupNavigation from "./nav-arrows";
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: "24px", // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: "36px",
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            LAMINAR-X
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={12}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Container component="main" maxWidth="md">
                                        <CssBaseline />
                                        <Box
                                            sx={{
                                                marginTop: 8,
                                                display: "flex",
                                                flexDirection: "column",
                                                // alignItems: "center",
                                            }}
                                        >
                                            <SignupNavigation
                                                prevPath={"/two"}
                                                nextPath={"/four"}
                                                nextText={"Next"}
                                            />
                                            {/* <div className='text-end'>Next <CustomLink to="/four"><ChevronRightIcon/> </CustomLink></div>  */}
                                            <Typography
                                                component="h1"
                                                variant="h4"
                                                textAlign={"left"}
                                                marginTop={6}
                                                marginBottom={3}
                                            >
                                                Let’s get Started!
                                            </Typography>
                                            <Typography
                                                component="h1"
                                                variant="h5"
                                            >
                                                What’s your name?
                                            </Typography>
                                            <Box
                                                component="form"
                                                sx={{ mt: 3 }}
                                            >
                                                <Grid
                                                    container
                                                    spacing={6}
                                                    marginBottom={4}
                                                >
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            autoComplete="given-name"
                                                            name="firstName"
                                                            required
                                                            fullWidth
                                                            id="firstName"
                                                            label="First name"
                                                            autoFocus
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="middleName"
                                                            label="middle Name"
                                                            name="middleName"
                                                            autoComplete="family-name"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            id="lastName"
                                                            label="lastName"
                                                            name="lastName"
                                                            autoComplete="lastName"
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Typography
                                                    component="h1"
                                                    variant="h5"
                                                    marginBottom={2}
                                                >
                                                    What best describes your
                                                    role in the company?
                                                </Typography>

                                                <RadioGroup2 />

                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Button
                                                        type="submit"
                                                        // fullWidth
                                                        variant="contained"
                                                        sx={{
                                                            mt: 3,
                                                            mb: 2,
                                                            display: "flex",
                                                            justifyContent:
                                                                "block",
                                                        }}
                                                    >
                                                        Continue
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Container>
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}

                            {/* Recent Orders */}
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const myTheme = createTheme({
    // style radio button as button element
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    color: "#293264",
                    margin: "5px 15px 0 0",
                    padding: "2px 8px",
                    width: "max-content",
                    borderStyle: "none",
                    border: "1px solid !important",
                    borderRadius: "13px!important",
                    "&.Mui-selected": {
                        backgroundColor: "#e7f5ed",
                        border: "1px solid #26a857 !important",
                        // borderStyle: "none!important",
                    },
                    "&:hover": {
                        backgroundColor: "#D6DBF5",
                    },
                },
            },
        },
    },
});

export function RadioGroup2() {
    const [alignment, setAlignment] = React.useState("left");

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ThemeProvider theme={myTheme}>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton
                    value="left"
                    aria-label="left aligned"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "110px",
                    }}
                >
                    <img
                        src="http://127.0.0.1:5173/resources/img/image 7.png"
                        alt=""
                        className="mb-1"
                    />
                    <Typography
                        sx={{
                            textTransform: "none",
                            fontSize: "0.8rem",
                            fontWeight: "700",
                        }}
                    >
                        Owner/Founder
                    </Typography>
                </ToggleButton>
                <ToggleButton
                    value="book"
                    aria-label="left aligned"
                    sx={{
                        display: "owner",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "110px",
                    }}
                >
                    <img
                        src="http://127.0.0.1:5173/resources/img/image 8.png"
                        alt=""
                        className="mb-1"
                    />
                    <Typography
                        sx={{
                            textTransform: "none",
                            fontSize: "0.8rem",
                            fontWeight: "700",
                        }}
                    >
                        Bookkeeper
                    </Typography>
                </ToggleButton>
                <ToggleButton
                    value="manager"
                    aria-label="left aligned"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "110px",
                    }}
                >
                    <img
                        src="http://127.0.0.1:5173/resources/img/image 9.png"
                        alt=""
                        className="mt-2 mb-1"
                    />
                    <Typography
                        sx={{
                            textTransform: "none",
                            fontSize: "0.8rem",
                            fontWeight: "700",
                        }}
                    >
                        Manager
                    </Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </ThemeProvider>
    );
}

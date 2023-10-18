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
                                    <Container component="main" maxWidth="xs">
                                        <CssBaseline />
                                        <Box
                                            sx={{
                                                marginTop: 8,
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                            }}
                                        >
                                            <SignupNavigation
                                                prevPath={"/three"}
                                                nextPath={"/five"}
                                                nextText={"Next"}
                                                nextSubText={null}
                                            />
                                            {/* <div className='text-end'>Next <CustomLink to="/four"><ChevronRightIcon/> </CustomLink></div>  */}
                                            {/* <Typography component="h1" variant="h4">
          Let’s get Started! 
          </Typography> */}
                                            <Typography
                                                component="h3"
                                                variant="h5"
                                            >
                                                What is the name of your
                                                business?
                                            </Typography>
                                            <Box
                                                component="form"
                                                sx={{ mt: 3 }}
                                            >
                                                {/* <Grid container spacing={2}> */}
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        autoComplete="given-name"
                                                        name="busName"
                                                        required
                                                        //   fullWidth
                                                        id="busName"
                                                        label="Business Name"
                                                        placeholder="Please enter business name"
                                                        autoFocus
                                                    />
                                                </Grid>

                                                <Typography
                                                    component="h3"
                                                    variant="h5"
                                                >
                                                    How is your business
                                                    structured?
                                                </Typography>
                                                <div className="imag">
                                                    <img
                                                        src="http://127.0.0.1:5173/resources/img/image 10.png"
                                                        alt=""
                                                    />
                                                    <img
                                                        src="http://127.0.0.1:5173/resources/img/image 11.png"
                                                        alt=""
                                                    />
                                                    <img
                                                        src="http://127.0.0.1:5173/resources/img/image 12.png"
                                                        alt=""
                                                    />
                                                </div>

                                                <Typography
                                                    component="h3"
                                                    variant="h5"
                                                >
                                                    Please enter your business
                                                    number(BN) registered with
                                                    the CRA.
                                                </Typography>

                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        //   fullWidth
                                                        id="middleName"
                                                        label="middle Name"
                                                        name="middleName"
                                                        autoComplete="family-name"
                                                    />
                                                </Grid>
                                                <Typography
                                                    component="h3"
                                                    variant="h5"
                                                >
                                                    Where is your business
                                                    located?
                                                </Typography>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            autoComplete="given-name"
                                                            name="firstName"
                                                            required
                                                            //   fullWidth
                                                            id="firstName"
                                                            label="First Name"
                                                            autoFocus
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            //   fullWidth
                                                            id="middleName"
                                                            label="middle Name"
                                                            name="middleName"
                                                            autoComplete="family-name"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            autoComplete="given-name"
                                                            name="firstName"
                                                            required
                                                            //   fullWidth
                                                            id="firstName"
                                                            label="First Name"
                                                            autoFocus
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            required
                                                            //   fullWidth
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
                                                            id="middleName"
                                                            label="middle Name"
                                                            name="middleName"
                                                            autoComplete="family-name"
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Typography
                                                    component="h3"
                                                    variant="h5"
                                                >
                                                    What is your businesses
                                                    primary activity?
                                                </Typography>

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
                                                <Typography
                                                    component="h3"
                                                    variant="h5"
                                                >
                                                    Does your business conduct
                                                    its main activities within
                                                    Canada?
                                                </Typography>
                                                <div className="imag">
                                                    <img
                                                        src="http://127.0.0.1:5173/resources/img/image 3.png"
                                                        alt=""
                                                    />
                                                </div>

                                                <Box>
                                                    {" "}
                                                    <Button
                                                        type="submit"
                                                        //   fullWidth
                                                        variant=""
                                                        sx={{
                                                            mt: 3,
                                                            mb: 2,
                                                            boxShadow: 3,
                                                        }}
                                                    >
                                                        Yes
                                                    </Button>
                                                </Box>

                                                <Box>
                                                    {" "}
                                                    <Button
                                                        type="submit"
                                                        //   fullWidth
                                                        variant=""
                                                        sx={{
                                                            mt: 3,
                                                            mb: 2,
                                                            boxShadow: 3,
                                                        }}
                                                    >
                                                        No
                                                    </Button>
                                                </Box>
                                                {/* </Grid> */}
                                                <hr />

                                                <Button
                                                    type="submit"
                                                    //   fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}
                                                >
                                                    Continue
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Container>
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}

                            {/* Recent Orders */}
                        </Grid>
                        <Paper>
                            <Box
                            // sx={{alignItems: 'flex-end'   }}
                            >
                                <Button
                                    type="submit"
                                    //   fullWidth
                                    variant=""
                                    sx={{ mt: 2, mb: 2, boxShadow: 3 }}
                                >
                                    <KeyboardArrowLeftIcon />
                                </Button>{" "}
                                Back
                                <Button
                                    className="push"
                                    type="submit"
                                    //   fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Continue
                                </Button>
                            </Box>
                        </Paper>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

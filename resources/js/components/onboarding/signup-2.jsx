import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link as CustomLink } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GoogleIcon from "@mui/icons-material/Google";
import Login from "../Login";
import SignupNavigation from "./nav-arrows";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {/* {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} */}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export function SignInTwo2() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        backgroundImage:
                            "url(http://127.0.0.1:5173/resources/img/hmbg1.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {" "}
                    <div className="header"> LAMINARX </div>{" "}
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
                        <SignupNavigation
                            prevPath={"/"}
                            nextPath={"/three"}
                            nextText={"Get started"}
                            nextSubText={"Step 2/3"}
                        />

                        <Typography
                            component="h1"
                            variant="h5"
                            fontWeight="800"
                        >
                            Additional Info!
                        </Typography>
                        <Typography color="gray">
                            For the purpose of industry regulation, your details
                            are required.
                        </Typography>
                        <Box
                            component="form"
                            className="text-center"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <Box className=" text-muted">
                                Phone number
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="user"
                                    label="Phone number"
                                    name="user"
                                    autoComplete="user"
                                    autoFocus
                                />
                            </Box>
                            <Box
                                className="text-start text-muted"
                                sx={{ marginBottom: "1rem" }}
                            >
                                Your Address
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Your Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />{" "}
                            </Box>
                            <Box sx={{ paddingTop: "1rem" }}>
                                <TextField
                                    id="select"
                                    label="Country of Residence"
                                    value="20"
                                    fullWidth
                                    select
                                >
                                    <MenuItem value="10">US</MenuItem>
                                    <MenuItem value="20">Canada</MenuItem>
                                </TextField>
                            </Box>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Save & Continue
                            </Button>

                            <Typography>Your Info is safely secured</Typography>

                            <Copyright sx={{ mt: 5 }} />

                            {/* <BrowserRouter>
            
<Routes>
    <Route path="/3" element={<SignInTwo/>}/>
    <Route path="/:id" element={<Login/>}/>
</Routes>
</BrowserRouter> */}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default function SignInTwo() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                {/* IMAGE */}
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        backgroundImage:
                            "url(http://127.0.0.1:5173/resources/img/hmbg1.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {" "}
                    <div className="header"> LAMINARX </div>{" "}
                </Grid>{" "}
                {/* CONTENT */}
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            marginTop: "3rem",
                            maxWidth: "30rem",
                            marginX: "auto",
                            paddingX: {
                                lg: "0rem",
                                sm: "2rem",
                                xs: "1rem",
                            },
                        }}
                    >
                        <SignupNavigation
                            prevPath={"/"}
                            nextPath={"/three"}
                            nextText={"Residence Info"}
                            nextSubText={"Step 2/3"}
                        />

                        <Typography
                            component="h1"
                            variant="h5"
                            fontWeight="800"
                            marginTop={"4rem"}
                            marginBottom={"0.5rem"}
                        >
                            Additional Info!
                        </Typography>
                        <Typography
                            color="gray"
                            paddingBottom={"1rem"}
                            marginBottom={"1.5rem"}
                            borderBottom={"1px solid #eaeaeb"}
                        >
                            For the purpose of industry regulation, your details
                            are required.
                        </Typography>

                        {/* FORM */}

                        <Box
                            component={"form"}
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                            }}
                        >
                            <Box className=" text-muted">
                                Phone number
                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="user"
                                    label="Phone number"
                                    name="user"
                                    autoComplete="user"
                                    autoFocus
                                />
                            </Box>
                            <Box className=" text-muted">
                                Your Address
                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Your Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />{" "}
                            </Box>
                            <Box className=" text-muted">
                                Country of residence
                                <TextField
                                    margin="dense"
                                    id="select"
                                    value="20"
                                    fullWidth
                                    select
                                >
                                    <MenuItem value="10">US</MenuItem>
                                    <MenuItem value="20">Canada</MenuItem>
                                </TextField>
                            </Box>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Save & Continue
                            </Button>

                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "#626262",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}
                            >
                                <LockOutlinedIcon sx={{ fontSize: "15px" }} />
                                Your Info is safely secured
                            </Typography>

                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

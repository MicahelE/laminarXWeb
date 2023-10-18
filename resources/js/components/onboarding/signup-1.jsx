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
import Container from "@mui/material/Container";
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

export function SignInSide3() {
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
                            prevPath={false}
                            nextPath={"/two"}
                            nextText={"Personal Info"}
                            nextSubText={"Step 1/3"}
                        />
                        <Typography
                            component="h1"
                            variant="h5"
                            fontWeight="800"
                        >
                            Register Account!
                        </Typography>
                        <Typography color="gray">
                            For the purpose of industry regulation, your details
                            are required.
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{
                                mt: 1,
                                borderTop: "1px solid #eaeaea",
                                paddingTop: "1rem",
                                marginTop: "1rem",
                            }}
                        >
                            <Box className="text-start text-muted">
                                Username
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="user"
                                    label="Username"
                                    name="user"
                                    autoComplete="user"
                                    autoFocus
                                />
                            </Box>
                            <Box className="text-start text-muted">
                                Email Address
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />{" "}
                            </Box>
                            <Box className="text-start text-muted">
                                Password
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Box>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                                sx={{ textAlign: "left", width: "100%" }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register Account
                            </Button>

                            {/* <Box>
                                <span className="border-b border-slate-400" />
                                or
                                <span className="border-b border-slate-400" />
                            </Box> */}

                            <Button
                                type="submit"
                                fullWidth
                                variant=""
                                sx={{ mt: 3, mb: 2, boxShadow: 3 }}
                            >
                                <div className="p-2 bg-white rounded-full">
                                    {/* <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4" />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853" />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04" />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335" />
                  </svg> */}
                                    <GoogleIcon />
                                </div>
                                Register With Google
                            </Button>
                            {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
                            <Copyright sx={{ mt: 5 }} />
                            {/* <BrowserRouter>
            
<Routes>
    <Route path="/3" element={<SignInSide/>}/>
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

export default function SignInSide() {
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
                            prevPath={false}
                            nextPath={"/two"}
                            nextText={"Personal Info"}
                            nextSubText={"Step 1/3"}
                        />

                        <Typography
                            component="h1"
                            variant="h5"
                            fontWeight="800"
                            marginTop={"4rem"}
                            marginBottom={"0.5rem"}
                        >
                            Register Account!
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
                            <Box className="text-muted">
                                Username
                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="user"
                                    label="Username"
                                    name="user"
                                    autoComplete="user"
                                    autoFocus
                                />
                            </Box>
                            <Box className=" text-muted">
                                Email Address
                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />{" "}
                            </Box>
                            <Box className="text-muted">
                                Password
                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Box>

                            {/* Buttons */}

                            <Box>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="remember"
                                            color="primary"
                                        />
                                    }
                                    label="Remember me"
                                />
                            </Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 1, paddingY: "0.7rem" }}
                            >
                                Register Account
                            </Button>

                            <Box
                                sx={{
                                    display: "flex",
                                    color: "#cccccc",
                                    alignItems: "center",
                                    gap: "1rem",
                                }}
                            >
                                <Box
                                    sx={{
                                        flex: "1",
                                        borderBottom: "1px solid black",
                                        height: "0px",
                                        borderColor: "#cccccc",
                                    }}
                                />
                                or
                                <Box
                                    sx={{
                                        flex: "1",
                                        borderBottom: "1px solid black",
                                        height: "0",
                                        borderColor: "#cccccc",
                                    }}
                                />
                            </Box>

                            <Button
                                type="submit"
                                fullWidth
                                variant=""
                                sx={{
                                    mt: 1,
                                    mb: 2,
                                    boxShadow: 3,
                                    display: "flex",
                                    gap: "1rem",
                                    paddingY: "0.7rem",
                                }}
                            >
                                <GoogleIcon />
                                Register With Google
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

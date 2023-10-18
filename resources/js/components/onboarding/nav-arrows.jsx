import Container from "@mui/material/Container";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link as CustomLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

import React from "react";
import Box from "@mui/material/Box";

export default function SignupNavigation({
    nextPath,
    prevPath,
    nextText = "next",
    nextSubText,
}) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#626262",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {prevPath === false ? (
                    <KeyboardArrowLeftIcon />
                ) : (
                    <CustomLink to={prevPath} sx={{ textDecoration: "none" }}>
                        <KeyboardArrowLeftIcon />
                    </CustomLink>
                )}
                Back
            </Box>
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {nextSubText && (
                    <Typography
                        sx={{
                            position: "absolute",
                            bottom: "-18px",
                            right: "25px",
                            color: "#C6C6C6",
                        }}
                    >
                        {nextSubText}
                    </Typography>
                )}
                {nextText}
                <CustomLink to={nextPath}>
                    <ChevronRightIcon />
                </CustomLink>
            </Box>
        </Box>
    );
}

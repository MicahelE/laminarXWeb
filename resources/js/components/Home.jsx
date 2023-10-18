import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Example } from "./Example";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import Page from "./Page";
import CustomFormValidation from "./CustomFormValidation";
import Login from "./Login";
import Template from "./Template";
// import Link from '@mui/material/Link';
import SignInSide from "./onboarding/signup-1";
import SignInTwo from "./onboarding/signup-2";
import PageThree from "./onboarding/signup-3";
import PageFour from "./onboarding/signup-4";
import PageFive from "./onboarding/signup-5";
import PageSix from "./onboarding/signup-6";
import PageSeven from "./onboarding/signup-7";
import PageEight from "./onboarding/signup-8";

export default function Home() {
    const heading = "Laminar X Web change";
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInSide />} />
                    <Route path="/log" element={<Login />} />
                    <Route path="/two" element={<SignInTwo />} />
                    <Route path="/three" element={<PageThree />} />
                    <Route path="/four" element={<PageFour />} />
                    <Route path="/five" element={<PageFive />} />
                    <Route path="/six" element={<PageSix />} />
                    <Route path="/seven" element={<PageSeven />} />
                    <Route path="/eight" element={<PageEight />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

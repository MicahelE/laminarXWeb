import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Link}  from 'react-router-dom';
import {Example} from './Example';
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import  Page  from "./Page"
import  CustomFormValidation  from "./CustomFormValidation"
import  Login  from "./Login"
import  Template  from "./Template"
// import Link from '@mui/material/Link';
import  SignInSide  from "./SignInSide"
import  SignInTwo  from "./SignInTwo"
import  PageThree  from "./PageThree"



export default function Home() {
    const heading = "Laminar X Web change";
        return (  
            <div> 
               
            <BrowserRouter>
         
<Routes>
    <Route path="/" element={<SignInSide/>}/>
    <Route path="/log" element={<Login/>}/>
    <Route path="/two" element={<SignInTwo/>}/>
    <Route path="/three" element={<PageThree/>}/>
</Routes>
</BrowserRouter>
            </div>
         );
}
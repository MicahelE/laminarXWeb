import {Example} from './Example';
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import  Page  from "./Page"
import  CustomFormValidation  from "./CustomFormValidation"
import  Login  from "./Login"
import  Template  from "./Template"
import  SignInSide  from "./SignInSide"

// function Example() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card">
//                         <div className="card-header">Example Component</div>

//                         <div className="card-body">I'm an example component!</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function Home() {
    const heading = "Laminar X Web change";
        return <div>  
            {/* {heading}  */}
        {/* <Example/>
        <Button>Click me</Button>
        <Label className="sr-only" htmlFor="email">
              Email
            </Label> */}
            {/* <Page/> */}
            {/* <CustomFormValidation/> */}
            {/* <Login/> */}
            {/* <Template/> */}
            <SignInSide/>
        </div>;
}
import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';        
import Home from './components/Home';
        
import Page from './components/Page';

ReactDOM.createRoot(document.getElementById('app')).render(     
   <div>
{/* <Page/> */}

<Home /> 
   </div>        
);
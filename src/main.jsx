import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/MyStore.jsx'
import Products from './data/Products.jsx'
import { BrowserRouter } from 'react-router'
import DealData from './data/DealData.jsx'

createRoot(document.getElementById('root')).render( 
   <BrowserRouter>
     <ContextProvider>
        <Products />
        
         <App />
    </ContextProvider>
   </BrowserRouter>
)

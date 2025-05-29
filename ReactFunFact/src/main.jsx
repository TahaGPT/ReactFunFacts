// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import "./index.css";
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import Main from "./MainContent.jsx";
import Footer from "./Footer.jsx";
import "./index.css";
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

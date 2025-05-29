import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// /*
// Challenge: Starting from scratch, build and render the 
// HTML for our section project. Check the Google slide for 
// what you're trying to build.

// We'll be adding more styling to it later.

// Hints:
// * The React logo is a file in the project tree, so you can
//   access it by using `src="react-logo.png"` in your image
//   element
// * You can also set the `width` attribute of the image element
//   just like in HTML. In the slide, I have it set to 40px
//  */

// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"));
// root.render(
//   <main>
//     <img src="react-logo.png" width="40px" />
//     <h1>Fun Facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by John Walke</li>
//       <li>Is maintained by Meta</li>
//       <li>Powers thouands of Interprise apps including react apps</li>
//     </ul>
//   </main>
// );

# vite-react

A Vite React template inspired by the folder structure of Next.js.

## Using this template

Create a local copy of this template with this command:

```
npx degit FADHsquared/vite-react your-project-name
```

## Notes

- Place static assets in `src/assets`, pages in `src/pages`, and styles in `src/styles`.
- Add folders to your liking, for example you can create a folder `src/components` for your components, `src/layouts` for your layouts, etc.
- Does not include auto routing. For that I'm waiting for [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) to exit experimental stage, but if you have other solutions please inform me.

## Recommendations for Adding Things!

1. **Tailwind CSS**  
   Because Vite supports PostCSS configs by default, setting up Tailwind is very easy. First let's install Tailwind and Autoprefixer:

   ```
   npm install --save-dev tailwindcss autoprefixer
   ```

   Now generate a default Tailwind and PostCSS config file:

   ```
   npx tailwindcss init -p
   ```

   Now customize the `tailwind.config.js` file. Please visit <https://tailwindcss.com/docs/guides/vue-3-vite> for details about the configuration file. Here I will leave my recommended config with JIT enabled and dark mode set to 'class'.

   ```js
   module.exports = {
     mode: 'jit',
     purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: 'class', // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   };
   ```

   Last step is to overwrite the `src/globals.css` with the three default Tailwind directives:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

   Now Tailwind CSS is ready to use in your project!

## Manual Template Setup

### Installation & Configuration

1. Scaffold a Vite + React project:

   ```
   npm init vite@latest
   ```

   Then follow the prompts, and run `npm install`.

2. Install ESLint:

   ```
   npm install --save-dev eslint
   ```

   Then set up a configuration file conveniently with:

   ```
   npx eslint --init
   ```

   Follow the following choices.

   - **How would you like to use ESLint?**  
     To check syntax, find problems, and enforce code style
   - **What type of modules does your project use?**  
     JavaScript modules (import/export)
   - **Which framework does your project use?**  
     React
   - **Does your project use TypeScript?**  
     No
   - **Where does your code run?**  
     Browser
   - **How would you like to define a style for your project?**  
     Use a popular style guide
   - **Which style guide do you want to follow?**  
     Airbnb
   - **What format do you want your config file to be in?**  
     JSON

   `eslint-config-airbnb` already requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`. This is very convenient! All we have to do is add `"airbnb/hooks"` to enable hooks linting. We don't even need `"plugin:react/recommended"`.

   ```diff
   "extends": [
   - "plugin:react/recommended",
     "airbnb",
   + "airbnb/hooks"
   ],
   ```

   If you do not use any extra rules you can safely delete these lines:

   ```diff
     "parserOptions": {
       "ecmaFeatures": {
         "jsx": true
       },
       "ecmaVersion": 12,
       "sourceType": "module"
     },
   - "plugins": [
   -   "react"
   - ],
   - "rules": {
   - }
   ```

3. Install Prettier:

   ```
   npm install --save-dev prettier
   ```

   Then create a .prettierrc file with the following content to comply with Airbnb's style guide:

   ```json
   {
     "singleQuote": true
   }
   ```

   Now let's install [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) so it plays nice with ESLint.

   ```
   npm install --save-dev eslint-config-prettier
   ```

   Then add this to your .eslintrc.json file:

   ```diff
   "extends": [
     "airbnb",
     "airbnb/hooks",
   + "prettier"
   ],
   ```

   Now let's add an .eslintignore file to prevent ESLint from complaining about `vite.config.js`, with the following content:

   ```
   vite.config.js
   ```

4. Install [react-router-dom](https://www.npmjs.com/package/react-router-dom)

   ```
   npm install react-router-dom
   ```

5. Install [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)

   ```
   npm install react-helmet-async
   ```

### Folder Structure, Router and React Helmet Setup

1. Create three folders, `src/assets`, `src/pages` and `src/styles`.
2. Rename `index.css` to `globals.css` and move it into the `styles` folder. Remember to fix the import in `main.jsx`.

   ```diff
   - import './index.css'
   + import './styles/globals.css'
   ```

3. Create a copy of `App.jsx` called `index.jsx` and place it inside the `pages` folder. Rename its function component to Home:

   ```diff
   - function App() {
   + function Home() {
       ...
     }
   - export default App
   + export default Home
   ```

4. Move `logo.svg` into the `assets` folder. Fix the import in `pages/index.jsx`.

   ```diff
   - import logo from './logo.svg'
   + import logo from '../assets/logo.svg'
   ```

5. Rename `App.css` to `Home.module.css` and move it into the `styles` folder. Fix the import in `pages/index.jsx`:

   ```diff
   - import './App.css'
   + import styles from '../styles/Home.module.css'
   ```

   Now let's modify the class names in `Home.module.css`.

   ```diff
   - .App {
   + .container {
       text-align: center;
     }

   - .App-logo {
   + .logo {
       height: 40vmin;
       pointer-events: none;
     }

     @media (prefers-reduced-motion: no-preference) {
   -   .App-logo {
   +   .logo {
   -     animation: App-logo-spin infinite 20s linear;
   +     animation: logo-spin infinite 20s linear;
       }
     }

   - .App-header {
   + .header {
       background-color: #282c34;
       min-height: 100vh;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       font-size: calc(10px + 2vmin);
       color: white;
     }

   - .App-link {
   + .link {
       color: #61dafb;
     }

   - @keyframes App-logo-spin {
   + @keyframes logo-spin {
       from {
         transform: rotate(0deg);
       }
       to {
         transform: rotate(360deg);
       }
     }

     button {
       font-size: calc(10px + 2vmin);
     }
   ```

   Time to fix the classes used in `pages/index.jsx`. While we're here let's fix an error because of Airbnb style guide non-compliance.

   ```diff
   return (
   - <div className="App">
   + <div className={styles.container}>
   -   <header className="App-header">
   +   <header className={styles.header}>
   -     <img src={logo} className="App-logo" alt="logo" />
   +     <img src={logo} className={styles.logo} alt="logo" />
         <p>Hello Vite + React!</p>
         <p>
   -       <button type="button" onClick={() => setCount((count) => count + 1)}>
   +       <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
             count is: {count}
           </button>
         </p>
         <p>
           Edit <code>App.jsx</code> and save to test HMR updates.
         </p>
         <p>
           <a
   -         className="App-link"
   +         className={styles.link}
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
           >
             Learn React
           </a>
           {' | '}
           <a
   -         className="App-link"
   +         className={styles.link}
             href="https://vitejs.dev/guide/features.html"
             target="_blank"
             rel="noopener noreferrer"
           >
             Vite Docs
           </a>
         </p>
       </header>
     </div>
   )
   ```

6. Completely overwrite `src/App.jsx` with a routing setup, as such.

   ```jsx
   import React from 'react';
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
   import Home from './pages/index';

   function App() {
     return (
       <Router>
         <Switch>
           <Route exact path="/">
             <Home />
           </Route>
         </Switch>
       </Router>
     );
   }

   export default App;
   ```

7. Final step now, let's modify `src/main.jsx` to wrap our `App` in a `HelmetProvider` to enable react-helmet-async `Helmet` usage.

   ```diff
     import React from 'react'
     import ReactDOM from 'react-dom'
     import './index.css'
   + import { HelmetProvider } from 'react-helmet-async'
     import App from './App'

     ReactDOM.render(
       <React.StrictMode>
   +     <HelmetProvider>
           <App />
   +     </HelmetProvider>
       </React.StrictMode>,
       document.getElementById('root')
     )
   ```

   Let's use `Helmet` to change the title of the `pages/index.jsx` page.

   ```diff
     import React, { useState } from 'react'
   + import { Helmet as Head } from 'react-helmet-async'
     import logo from '../assets/logo.svg'
     import styles from '../styles/Index.module.css'

     ...

     function Home() {
       const [count, setCount] = useState(0)

       return (
         <div className={styles.container}>
   +       <Head>
   +         <title>Vite + React</title>
   +       </Head>
           <header className={styles.header}>
   ```

8. Complete! Yay!

## References

[Getting started with Vue 3 + Vite in 2021 (feat. Tailwind CSS, Vue Router, Vuex, ESLint & Prettier)](https://www.youtube.com/watch?v=O8epzPrsADI)  
[ESLint and Prettier with Vite and Vue.js 3](https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/)  
[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)  
[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)  
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)  
[A Better Way to Structure React Projects](https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/)

# React + TypeScript + Vite
please do not forget to add your OpenAPI key in nlpservice.ts

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY', // Here please enter your OpenAI key like sk:******* i  remove my key because of security and two many request.
});
_______________________________________________________________________________________________________________________

-------Installation and Setup---------------
______________________________________________________________
-> Clone the repository using git clone:  https://github.com/HarshSharma1107/agentchatbot
-> Install dependencies using: npm i or npm install
-> First start the backend server: node src/backend/server.js
and in other terminal start: npm run dev
_______________________________________________________________________

->>Features
-> Answers "how-to" questions about using features within each CDP
-> Extracts information from official documentation to provide accurate answers
-> Handles variations in question phrasing and terminology
-> Provides cross-CDP comparisons and answers advanced "how-to" questions without how-to
__________________________________________________________________________________________

->>Technologies Used
-> Natural Language Processing (NLP) library: OpenAI API
->Web application framework: react+vite, typescript,javascript,HTML,CSS
_______________________________________________________________________________________

->>Data Sources
-> Segment Documentation:  https://segment.com/docs/?ref=nav
-> mParticle Documentation: https://docs.mparticle.com/
-> Lytics Documentation:  https://docs.lytics.com/
-> Zeotap Documentation:  https://docs.zeotap.com/home/en-us/
_________________________________________________________________________________________

->> Usage
-> Open the chatbot in your web browser
-> Ask a "how-to" question about using a feature within one of the four CDPs
-> The chatbot will provide an accurate answer based on the official documentation

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

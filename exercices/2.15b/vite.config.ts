import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
    typescript: true, // signale les erreurs dans le terminal et dans le nav 
  }),
],

// veut dire : " je configure le comportement du serveur de developpement de Vite"
// ton frontend tourne sur http://localhost:5173/ et ici tu lui dit: ajoute un proxy a ton serveur 
  server: {
    // intermediaire : une sorte de messager qui transmet une requete a ta place 
    proxy: { // on dit a Vite : "Si la requete commence par /api, occupe-toi d'elle "
      "/api": {// des que ton frontend appelle une URL qui commence pas /api , applique les regles suivants  
        target: "http://localhost:3000",   // ➜ adresse de ton API film 
        // veut dire “Quand quelqu’un appelle /api/..., en réalité, envoie la requête à http://localhost:3000/....”
        changeOrigin: true, // Il dit au proxy : “Fais comme si la requête venait du serveur 5173 lui-même.”
        rewrite: (path) => path.replace(/^\/api/, ""),//Le proxy enlève /api du début de l’URL avant d’envoyer la requête au backend. 
        // pq ? Parce que ton API n’a PAS de route /api/movies.
      },
    },
  },
});

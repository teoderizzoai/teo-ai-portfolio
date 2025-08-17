import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages deployment
  base: "/teo-ai-portfolio/",
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure proper build output for GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: undefined, // Disable manual chunking for better GitHub Pages compatibility
        entryFileNames: 'assets/[name].mjs', // Use .mjs extension for better MIME type recognition
        chunkFileNames: 'assets/[name].mjs',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
    // Ensure proper asset handling
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1000,
    // Force proper module type
    target: 'esnext',
    modulePreload: false,
  },
}));

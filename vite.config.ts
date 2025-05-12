/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";



export default defineConfig({
  plugins: [react(),dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias `@` to `src`
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'TaskManagement',
      fileName: (format) => `index.${format}.js`,

    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',
    sourcemap: true,
  },
});
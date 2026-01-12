import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Calculate base path for GitHub Pages PR previews
// Format: /DuckTapeDevOpsUI/pr-{number}/
const getBasePath = () => {
  if (process.env.PR_NUMBER) {
    return `/DuckTapeDevOpsUI/pr-${process.env.PR_NUMBER}/`
  }
  return '/' // Default for production
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    host: true, // This enables listening on all network interfaces
    port: 3000,
    strictPort: false, // Allow fallback to next available port
    watch: {
      usePolling: true, // This helps with WSL2 file system watching
    },
  },
})

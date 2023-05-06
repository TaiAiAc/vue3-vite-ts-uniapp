import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import unocss from '@unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/variables.scss" as *;;
        `
      }
    }
  },
  plugins: [uni(), unocss()]
})

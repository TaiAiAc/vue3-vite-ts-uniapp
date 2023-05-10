import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import unocss from 'unocss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
      '@images': resolve(process.cwd(), 'src/assets/images')
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

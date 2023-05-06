import { defineConfig } from '@unocss/vite'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  exclude: ['node_modules', 'dist', '.git', '.husky', '.vscode', 'public', 'build', 'mock', './stats.html'],
  presets: [presetUno({ dark: 'class' })],
  transformers: [transformerDirectives()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center'
  },
  theme: {
    colors: {
      primary: 'var(--am-primary-color)',
      success: 'var(--am-success-color)',
      warning: 'var(--am-warning-color)',
      error: 'var(--am-error-color)',
      dark: '#18181c'
    }
  }
})

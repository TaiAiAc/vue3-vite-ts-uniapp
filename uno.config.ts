import { defineConfig, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center'
  },
  rules: [
    [/^w-(\d+)$/, ([, w]) => ({ width: `${w}rpx` })],
    [/^h-(\d+)$/, ([, h]) => ({ height: `${h}rpx` })],
    [/^m-(\d+)$/, ([, m]) => ({ margin: `${m}rpx` })],
    [/^ml-(\d+)$/, ([, m]) => ({ 'margin-left': `${m}rpx` })],
    [/^mt-(\d+)$/, ([, m]) => ({ 'margin-top': `${m}rpx` })],
    [/^mr-(\d+)$/, ([, m]) => ({ 'margin-right': `${m}rpx` })],
    [/^mb-(\d+)$/, ([, m]) => ({ 'margin-bottom': `${m}rpx` })],
    [/^mx-(\d+)$/, ([, m]) => ({ 'margin-left': `${m}rpx`, 'margin-right': `${m}rpx` })],
    [/^my-(\d+)$/, ([, m]) => ({ 'margin-top': `${m}rpx`, 'margin-bottom': `${m}rpx` })],
    [/^p-(\d+)$/, ([, p]) => ({ padding: `${p}rpx` })],
    [/^pl-(\d+)$/, ([, p]) => ({ 'padding-left': `${p}rpx` })],
    [/^pt-(\d+)$/, ([, p]) => ({ 'padding-top': `${p}rpx` })],
    [/^pr-(\d+)$/, ([, p]) => ({ 'padding-right': `${p}rpx` })],
    [/^pb-(\d+)$/, ([, p]) => ({ 'padding-bottom': `${p}rpx` })],
    [/^px-(\d+)$/, ([, p]) => ({ 'padding-left': `${p}rpx`, 'padding-right': `${p}rpx` })],
    [/^py-(\d+)$/, ([, p]) => ({ 'padding-top': `${p}rpx`, 'padding-bottom': `${p}rpx` })],
    [/^text-(\d+)$/, ([, t]) => ({ 'font-size': `${t}rpx` })]
  ],
  theme: {
    colors: {
      primary: 'var(--am-primary-color)',
      success: 'var(--am-success-color)',
      warning: 'var(--am-warning-color)',
      error: 'var(--am-error-color)',
      dark: '#18181c'
    }
  },
  presets: [presetUno()],
  preflights: [
    {
      getCSS: context => `
        div {
          box-sizing: border-box;
        }
      `
    }
  ]
})

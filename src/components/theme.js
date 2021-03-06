
import { extend } from '@raid/kit'
import { theme as core } from '@raid-ui/theme'

export const theme = extend(core)({
  colors: {
    gradientMain: 'linear-gradient(137deg, rebeccapurple, darkorchid, blueviolet, magenta)',
    primary: 'rebeccapurple'
  },
  sizes: {
    app: '80em',
    header: '92em',
    content: '54em'
  }
})

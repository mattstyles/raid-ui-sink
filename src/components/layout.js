
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { Box, View } from '@raid/kit'

export const AppContainer = styled(View)(
  css({
    mx: 'auto',
    width: '100%',
    maxWidth: 'app',
    display: 'flex',
    flexDirection: 'row'
  })
)
AppContainer.defaultProps = {
  as: 'main'
}

export const Content = styled(Box)(
  css({
    width: 'content'
  })
)

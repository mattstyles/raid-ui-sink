
import { Header as HeaderContainer } from '@raid/app-kit'
import { Box, Text } from '@raid/kit'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'
import styled from 'styled-components'

const TopBar = styled(Box)(
  props => css({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    background: themeGet('colors.gradientMain')(props)
  })
)

export const Header = ({
  children
}) => {
  return (
    <Box>
      <HeaderContainer variant='sticky'>
        <TopBar />
        <Text as='h1'>Hello</Text>
      </HeaderContainer>
      {children}
    </Box>
  )
}

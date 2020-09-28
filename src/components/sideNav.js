
import styled from 'styled-components'
import { css } from '@styled-system/css'
import {
  Card, Button, Divider, Text, Flex
} from '@raid/kit'
import { ChevronRight } from '@raid-ui/icons/ChevronRight'

const StyledButton = styled(Button)(
  css({
    bg: 'white',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'background.200',
    width: '100%'
  }),
  {
    ':last-of-type': {
      borderColor: 'transparent'
    }
  }
)
StyledButton.defaultProps = {
  variant: 'naked',
  rounding: 'square'
}

const NavLink = ({
  href,
  children
}) => {
  return (
    <StyledButton as='a' href={href}>
      <Flex row py={2} px={4} width='full' sx={{ alignItems: 'center' }}>
        <Text sx={{ flex: 1, textAlign: 'left' }}>{children}</Text>
        <Divider isVertical mx={1} sx={{ height: 6 }} />
        <ChevronRight size={6} />
      </Flex>
    </StyledButton>
  )
}

export const SideNavigation = ({
  routes
}) => {
  return (
    <Card p={0} sx={{ overflow: 'hidden' }}>
      {routes.map(route => {
        return (
          <NavLink key={route.name} href={route.to}>{route.name}</NavLink>
        )
      })}
    </Card>
  )
}
SideNavigation.defaultProps = {
  routes: []
}

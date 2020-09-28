
import {
  Screen, Box, Flex, Stack,
  Image, Spacer, Card,
  H1, P, Text,
  Select, Label
} from '@raid/kit'

import { connect, emit } from 'signals'
import { Header } from 'components/header'
import { AppContainer, Content } from 'components/layout'
import { SideNavigation } from 'components/sideNav'
import { routes } from 'core/routing/routes'

import { selector as splashSelector, actions } from 'core/splash'

const homeRouteMap = []
for (const [name, to] of Object.entries(routes)) {
  homeRouteMap.push({ name, to })
}

const SelectHero = ({
  images
}) => {
  return (
    <Card>
      <Label>
        <Text display='block' pb={2}>Select hero</Text>
        <Select
          id='hero'
          onChange={event => {
            emit(actions.update, JSON.parse(event))
          }}
        >
          {images.map(image => {
            return (
              <option key={image.id} value={JSON.stringify(image)}>
                {image.id}
              </option>
            )
          })}
        </Select>
      </Label>
    </Card>
  )
}

export const Home = connect(
  splashSelector,
  ({ selected, images }) => {
    return (
      <Screen bg='background.75'>
        <Header>
          <Box sx={{ width: 'full', height: ['160px', '240px'] }}>
            <Image src={selected} rounding='square' />
          </Box>
        </Header>
        <Spacer my={8} />
        <AppContainer>
          <Content>
            <H1 sx={{ mt: 0 }}>Raid-ui Kitchen Sink</H1>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
            <P>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</P>
          </Content>
          <Spacer px={4} />
          <Flex flex={1}>
            <Stack space={4}>
              <SelectHero images={images} />
              <SideNavigation routes={homeRouteMap} />
            </Stack>
          </Flex>
        </AppContainer>
      </Screen>
    )
  }
)


import { createStructuredSelector } from 'reselect'
import { View } from '@raid/kit'

import { connect } from 'signals'
import { Title } from 'components/title'
import { getMessage } from 'core/selectors'

const viewSelector = createStructuredSelector({
  message: getMessage
})

export const Home = connect(
  viewSelector,
  ({ message }) => (
    <View>
      <Title text='raid-ui-sink' />
    </View>
  )
)

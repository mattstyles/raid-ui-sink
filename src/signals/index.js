
import { Signal } from 'raid'
import { adaptor } from '@raid/addons'
import { initial as navigationState } from '@raid/navigator'

import { splash } from 'core/splash'

const initial = {
  ...navigationState,
  message: 'raid-ui-sink',
  splash
}

export const signal = new Signal(initial)
export const connect = adaptor(signal)
export const dispatch = type => payload => signal.emit({ type, payload })
export const emit = (type, payload) => signal.emit({ type, payload })

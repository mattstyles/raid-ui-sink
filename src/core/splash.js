
import { createStructuredSelector } from 'reselect'
import { safe } from '@raid/addons'

import stars from 'assets/jeremy-thomas-E0AHdsENmDg-unsplash.jpg'
import sunset from 'assets/artiom-vallat-m7J3qtsL8Xw-unsplash.jpg'
import louvre from 'assets/jai-bakshi-yFGAx6xQa74-unsplash.jpg'
import laser from 'assets/antoine-julien-r3XvSBEQQLo-unsplash.jpg'

export const splash = {
  selected: {
    id: 'Jeremy Thomas',
    src: stars
  },
  images: [
    {
      id: 'Jeremy Thomas',
      src: stars
    },
    {
      id: 'Artiom Vallet',
      src: sunset
    },
    {
      id: 'Jai Bakshi',
      src: louvre
    },
    {
      id: 'Antoine Julien',
      src: laser
    }
  ]
}

export const selector = createStructuredSelector({
  selected: state => state?.splash?.selected?.src,
  images: state => state?.splash?.images
})

export const actions = {
  update: 'splash:update'
}

export const update = safe((state, event) => {
  console.log(event)
  if (event.type === 'splash:update') {
    return {
      ...state,
      splash: {
        ...splash,
        selected: event.payload
      }
    }
  }
})

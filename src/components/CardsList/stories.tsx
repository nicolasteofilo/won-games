import { Meta, Story } from '@storybook/react/types-6-0'
import { CardsList, CardsListProps } from '.'

import cardsMock from 'components/PaymentOptions/mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as Meta

export const Basic: Story<CardsListProps> = (args) => (
  <div
    style={{
      maxWidth: '80rem'
    }}
  >
    <CardsList {...args} />
  </div>
)

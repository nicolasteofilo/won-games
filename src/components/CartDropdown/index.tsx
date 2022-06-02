import { GameItemProps } from 'components/GameItem'
import { Dropdown } from 'components/Dropdown'
import * as S from './styles'
import { CartIcon } from 'components/CartIcon'
import { CartList } from 'components/CartList'

export type CartDropdownProps = {
  items: GameItemProps[]
  total: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export { CartDropdown }

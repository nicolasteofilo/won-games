import { screen } from '@testing-library/react'
import { Heading } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import theme from '../../styles/theme'
import 'jest-styled-components'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': `0.5rem solid ${theme.colors.secondary}`
    })
  })

  it('should render a heading with a line to the bottom side', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    )
  })
})

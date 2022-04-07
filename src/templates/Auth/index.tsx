import { Heading } from 'components/Heading'
import { Logo } from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  children: React.ReactNode
  title: string
}

const Auth = ({ children, title }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />
      <Heading>All your favorites games in one place</Heading>
      <S.Subtitle>
        <strong>WON </strong>
        is the best and most complete gaming platform.
      </S.Subtitle>

      <S.Footer>
        Won Games {new Date().getFullYear()} © Todos os Direitos Reservados
      </S.Footer>
    </S.BannerBlock>
    <S.Content>
      <Logo color="black" size="large" />
      <Heading color="black" lineLeft lineColor="secondary">
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
)

export { Auth }

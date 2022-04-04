import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { Highlight, HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Heading } from 'components/Heading'
import { Menu } from 'components/Menu'
import { BannerSlider } from 'components/BannerSlider'
import { GameCardSlider } from 'components/GameCardSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingMoreGames,
  freeGames,
  freeGamesHighlight,
  upcomingHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        New Games
      </Heading>

      <GameCardSlider items={newGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} color="white" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcoming
      </Heading>

      <GameCardSlider items={upcomingGames} color="white" />
      <Highlight {...upcomingHighlight} />
      <GameCardSlider items={upcomingMoreGames} color="white" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...freeGamesHighlight} />
      <GameCardSlider items={freeGames} color="white" />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export { Home }

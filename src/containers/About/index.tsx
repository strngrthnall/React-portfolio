import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph paragraphType="main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus ab
      sunt molestiae et facilis, fuga a in, debitis minima doloribus sequi animi
      error maiores rem? Quidem voluptatem earum ad?
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=strngrthnall&theme=dracula" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=strngrthnall&layout=compact&langs_count=8&theme=dracula" />
    </GithubSection>
  </section>
)

export default About

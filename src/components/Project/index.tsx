import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto 1</Title>
    <Paragraph paragraphType="secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project

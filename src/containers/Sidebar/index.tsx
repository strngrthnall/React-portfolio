import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'

import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Marcos Vinicius</Title>
      <Paragraph paragraphType="secondary" fontSize={16}>
        Strngrthnall
      </Paragraph>
      <Description paragraphType="main" fontSize={12}>
        Engenheiro front-end
      </Description>
      <ThemeButton onClick={props.changeTheme}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar

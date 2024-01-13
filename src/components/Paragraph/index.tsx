import { Paragraph as ParagraphStyle } from './styles'

export type Props = {
  children: string
  paragraphType?: 'principal' | 'secundario'
}

const Paragraph = ({ children, paragraphType = 'principal' }: Props) => (
  <ParagraphStyle paragraphType={paragraphType}>{children}</ParagraphStyle>
)

export default Paragraph

import { Paragraph as ParagraphStyle } from './styles'

export type Props = {
  children: string
  paragraphType?: 'main' | 'secondary'
}

const Paragraph = ({ children, paragraphType = 'main' }: Props) => (
  <ParagraphStyle paragraphType={paragraphType}>{children}</ParagraphStyle>
)

export default Paragraph

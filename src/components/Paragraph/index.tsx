import { Paragraph as ParagraphStyle } from './styles'

export type Props = {
  children: string
  paragraphType?: 'main' | 'secondary'
  fontSize?: number
}

const Paragraph = ({ children, paragraphType = 'main', fontSize }: Props) => (
  <ParagraphStyle fontSize={fontSize} paragraphType={paragraphType}>
    {children}
  </ParagraphStyle>
)

export default Paragraph

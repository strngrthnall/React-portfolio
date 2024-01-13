import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.p<Props>`
  line-height: 22px;
  color: ${(props) =>
    props.paragraphType === 'principal' ? '#282a35' : '#949494'};
  font-size: 14px;
`

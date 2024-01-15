import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.p<Props>`
  line-height: 22px;
  color: ${(props) =>
    props.paragraphType === 'main'
      ? props.theme.mainColor
      : props.theme.secondaryColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
`

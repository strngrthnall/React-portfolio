import styled from 'styled-components'
import { Paragraph as ParagraphStyle } from '../../components/Paragraph/styles'

export const Description = styled(ParagraphStyle)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ThemeButton = styled.button`
  font-size: 13px;
  font-weight: bold;
  border: 2px solid ${(props) => props.theme.backgroundColor};
  border-radius: 12px;
  color: ${(props) => props.theme.backgroundColor};
  padding: 8px;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`

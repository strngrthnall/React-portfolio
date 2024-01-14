import styled from 'styled-components'
import { Paragraph as ParagraphStyle } from '../../components/Paragraph/styles'

export const Description = styled(ParagraphStyle)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ThemeButton = styled.button`
  font-size: 10px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  color: #eee;
  padding: 8px;
  background-color: #282a35;
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`

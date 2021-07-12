import styled from 'styled-components'
import { colors } from '../styles/variables'

export const Wrap = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 32px 0;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bgGrey};
`

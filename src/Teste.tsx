/* eslint-disable prettier/prettier */
import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'}
`

const BotaoPerigo = styled(Botao)`
  background-color: blue;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Confirm </Botao>
      <Botao fontSize="14px" principal={false}> Cancel </Botao>
      <BotaoPerigo as="a" principal >
        <span>
          Não clique aqui
        </span>
      </BotaoPerigo>
    </>
  )
}

export default Teste

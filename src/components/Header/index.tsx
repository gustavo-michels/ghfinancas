import logoImg from '../../assets/logo.svg'
import { Container, Content, LogoContainer } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logoImg} alt="gh finanças" />
          <h1>gh finanças</h1>
        </LogoContainer>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}

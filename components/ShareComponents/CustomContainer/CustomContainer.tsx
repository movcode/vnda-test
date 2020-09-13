import { ReactChild, ReactChildren } from 'react'
import { StyledContainer, WrraperGrid } from './CustomContainerStyle'
interface Props {
  children: ReactChildren | ReactChild
}
const CustomContainer = ({ children }: Props) =>
  <StyledContainer>
    <WrraperGrid>{children}</WrraperGrid>
  </StyledContainer>

export default CustomContainer

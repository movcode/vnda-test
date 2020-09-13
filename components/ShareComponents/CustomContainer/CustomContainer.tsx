import { ReactChild, ReactChildren } from 'react'
import { StyledContainer, WrraperGrid } from './CustomContainerStyle'
interface Props {
  chilren: ReactChildren | ReactChild
}
const CustomContainer = ({ chilren }: Props) =>
  <StyledContainer>
    <WrraperGrid>{chilren}</WrraperGrid>
  </StyledContainer>
export default CustomContainer

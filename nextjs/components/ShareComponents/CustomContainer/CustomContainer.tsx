import { ReactChild, ReactChildren } from 'react'
import { StyledContainer } from './CustomContainerStyle'
interface Props {
  children: ReactChildren | ReactChild
}
const CustomContainer = ({ children }: Props) =>
  <StyledContainer>
    {children}
  </StyledContainer>

export default CustomContainer

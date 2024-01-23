import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface PageContainerProps {
  children: ReactNode;
  isOpen: boolean;
}

const StyledPageContainer = styled.div<{ $isOpen: boolean }>`
  flex: 1;
  margin-left: ${({ $isOpen }) => ($isOpen ? '282px' : '0')};
  padding: 20px;
  transition: margin-left 0.3s ease-in-out;
`;

const PageContainer: FC<PageContainerProps> = ({ children, isOpen }) => {
  return <StyledPageContainer $isOpen={isOpen}>{children}</StyledPageContainer>;
};

export default PageContainer;

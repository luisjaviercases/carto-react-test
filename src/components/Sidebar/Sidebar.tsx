import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface SidebarProps {
  children: ReactNode;
  isOpen: boolean;
}

const StyledSidebar = styled.div<{ $isOpen: boolean }>`
  background-color: #e9e9e9;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-282px')};
  padding: 16px;
  position: fixed;
  top: 0;
  transition: left 0.3s ease-in-out;
  width: 250px;
  z-index: 1;
`;

const Sidebar: FC<SidebarProps> = ({ children, isOpen }) => {
  return <StyledSidebar $isOpen={isOpen}>{children}</StyledSidebar>;
};

export default Sidebar;

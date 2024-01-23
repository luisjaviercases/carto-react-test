import { FC } from 'react';
import styled from 'styled-components';

interface ToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const StyledToggleButton = styled.button`
  background-color: #333;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  z-index: 1;
`;

const ToggleButton: FC<ToggleButtonProps> = ({ isOpen, onClick }) => {
  return <StyledToggleButton onClick={onClick}>{isOpen ? 'Close Sidebar' : 'Open Sidebar'}</StyledToggleButton>;
};

export default ToggleButton;

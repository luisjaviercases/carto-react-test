import { FC } from 'react';
import styled from 'styled-components';

interface LayerToolsProps {
  layerId: string;
}

const LayerToolsContainer = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  height: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 100%;
`;

const LayerTools: FC<LayerToolsProps> = ({ layerId }) => {
  return <LayerToolsContainer>Show tools for {layerId}</LayerToolsContainer>;
};

export default LayerTools;

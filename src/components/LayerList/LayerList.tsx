import { FC, MouseEvent } from 'react';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useLayerContext } from '@/context/LayerContext';
import { CartoLayer } from '@deck.gl/carto/typed';

interface LayerListProps {
  layers: CartoLayer[];
  onLayerClick: (layerId: string) => void;
}

const LayerItem = styled.div`
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  padding: 0.5rem;
`;

const LayerListContainer = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const LayerList: FC<LayerListProps> = ({ layers, onLayerClick }) => {
  const { layerStates, updateLayerState } = useLayerContext();

  const isVisible = (layerId: string) => {
    const cartoLayer: CartoLayer | undefined = layers.find((layer) => layer.id === layerId);

    if (cartoLayer) {
      return layerStates[cartoLayer.id]?.visible === undefined
        ? !cartoLayer?.props.visible
        : !layerStates[cartoLayer?.id].visible;
    }

    return false;
  };

  const handleToggleVisibility = (event: MouseEvent<HTMLButtonElement>, layerId: string) => {
    event.stopPropagation();
    const cartoLayer = layers.find((layer) => layer.id === layerId);

    if (cartoLayer) {
      const newVisibility = isVisible(layerId);
      updateLayerState(layerId, { visible: newVisibility });
    }
  };

  return (
    <LayerListContainer>
      {layers.map((layer) => (
        <LayerItem key={layer.id} onClick={() => onLayerClick(layer.id)}>
          <IconButton
            onClick={(event: MouseEvent<HTMLButtonElement>) => {
              handleToggleVisibility(event, layer.id);
            }}>
            {isVisible(layer.id) ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
          <span>{layer.id}</span>
        </LayerItem>
      ))}
    </LayerListContainer>
  );
};

export default LayerList;

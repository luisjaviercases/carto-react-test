import { useState } from 'react';
import '@/App.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import PageContainer from '@/components/PageContainer/PageContainer';
import ToggleButton from '@/components/ToggleButton/ToggleButton';
import Map from '@/components/Map/Map';
import { CartoLayer, MAP_TYPES } from '@deck.gl/carto/typed';
import LayerList from '@/components/LayerList/LayerList';
import { useLayerContext } from '@/context/LayerContext';
import LayerTools from '@/components/LayerTools/LayerTools';

function App() {
  const { layerStates } = useLayerContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);

  const retailLayer = new CartoLayer({
    id: 'retails',
    connection: 'carto_dw',
    type: MAP_TYPES.TABLE,
    data: 'carto-demo-data.demo_tables.retail_stores',
    pointRadiusMinPixels: 1,
    getLineColor: [0, 0, 0, 0.75],
    visible: layerStates['retails']?.visible ?? true,
  });

  const sociodemographicLayer = new CartoLayer({
    id: 'sociodemographic',
    connection: 'carto_dw',
    type: MAP_TYPES.TILESET,
    data: 'carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup',
    getFillColor: [238, 77, 90],
    visible: layerStates['sociodemographic']?.visible ?? true,
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const onLayerClick = (layerId: string) => {
    selectedLayer === layerId ? setSelectedLayer(null) : setSelectedLayer(layerId);
  };

  const layers = [retailLayer, sociodemographicLayer];

  return (
    <div>
      <Sidebar isOpen={isOpen}>
        <LayerList layers={layers} onLayerClick={onLayerClick} />
        {selectedLayer !== null && <LayerTools layerId={selectedLayer} />}
      </Sidebar>
      <PageContainer isOpen={isOpen}>
        <ToggleButton isOpen={isOpen} onClick={toggleSidebar} />
        <Map layers={layers} />
      </PageContainer>
    </div>
  );
}

export default App;

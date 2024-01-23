import { FC } from 'react';
import DeckGL from '@deck.gl/react/typed';
import StaticMap from 'react-map-gl';
import { CartoLayer, setDefaultCredentials, MAP_TYPES, BASEMAP } from '@deck.gl/carto/typed';
import 'mapbox-gl/dist/mapbox-gl.css';

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 1,
  pitch: 0,
  bearing: 0,
};

const MapContainer: FC = () => {
  setDefaultCredentials({
    accessToken: import.meta.env.VITE_CARTO_ACCESS_TOKEN,
    apiBaseUrl: 'https://gcp-europe-west1.api.carto.com',
  });

  const retailLayer = new CartoLayer({
    id: 'retails',
    connection: 'carto_dw',
    type: MAP_TYPES.TABLE,
    data: 'carto-demo-data.demo_tables.retail_stores',
    pointRadiusMinPixels: 7,
    getLineColor: [0, 0, 0, 0.75],
  });

  const sociodemographicLayer = new CartoLayer({
    id: 'sociodemographic',
    connection: 'carto_dw',
    type: MAP_TYPES.TILESET,
    data: 'carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup',
    getFillColor: [238, 77, 90],
  });

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} layers={[retailLayer, sociodemographicLayer]} controller={true}>
      <StaticMap mapStyle={BASEMAP.VOYAGER} />
    </DeckGL>
  );
};

export default MapContainer;

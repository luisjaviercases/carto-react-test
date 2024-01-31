import { FC } from 'react';
import DeckGL from '@deck.gl/react/typed';
import StaticMap from 'react-map-gl';
import { CartoLayer, setDefaultCredentials, BASEMAP } from '@deck.gl/carto/typed';
import 'mapbox-gl/dist/mapbox-gl.css';

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 1,
  pitch: 0,
  bearing: 0,
};

interface MapProps {
  layers: CartoLayer[];
}

const MapContainer: FC<MapProps> = ({ layers }) => {
  setDefaultCredentials({
    accessToken: import.meta.env.VITE_CARTO_ACCESS_TOKEN,
    apiBaseUrl: 'https://gcp-europe-west1.api.carto.com',
  });

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} layers={layers} controller={true}>
      <StaticMap mapStyle={BASEMAP.VOYAGER} />
    </DeckGL>
  );
};

export default MapContainer;

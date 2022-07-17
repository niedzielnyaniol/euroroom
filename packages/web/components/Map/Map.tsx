import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

type MapProps = { position: [number, number] };

const Map = ({ position }: MapProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => setShouldRender(true), []);

  return shouldRender ? (
    <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: '300px' }}>
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
      <Marker position={position} icon={new Leaflet.Icon({ iconUrl: '/marker-icon-2x.png', iconSize: [25, 41] })} />
    </MapContainer>
  ) : (
    <Box h="300px" />
  );
};

export default Map;

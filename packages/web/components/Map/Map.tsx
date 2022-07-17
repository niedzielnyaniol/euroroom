import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

type MapProps = { position: [number, number]; height?: string | number; h?: string | number };

const Map = ({ position, height = '300px', h = height }: MapProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => setShouldRender(true), []);

  return shouldRender ? (
    <Box h={h} borderRadius="lg" overflow="hidden">
      <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height }}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
        <Marker position={position} icon={new Leaflet.Icon({ iconUrl: '/marker-icon-2x.png', iconSize: [25, 41] })} />
      </MapContainer>
    </Box>
  ) : (
    <Box h={h} />
  );
};

export default Map;

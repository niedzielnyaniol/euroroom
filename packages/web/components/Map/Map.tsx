import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import Address from '../../types/Address';
import getGoogleMapsLink from '../../utils/getGoogleMapsLink';

type MapProps = { position: Address['markerPosition']; height?: string | number; h?: string | number };

const Map = ({ position: { lat, lng }, height = '300px', h = height }: MapProps) => {
  const positionTuple = [lat, lng] as [number, number];
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => setShouldRender(true), []);

  return shouldRender ? (
    <Box h={h} borderRadius="lg" overflow="hidden">
      <MapContainer center={positionTuple} zoom={16} scrollWheelZoom={false} style={{ height }}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
        <Marker position={positionTuple} icon={new Leaflet.Icon({ iconUrl: '/marker.svg', iconSize: [40, 51] })}>
          <Popup>
            <a href={getGoogleMapsLink({ lat, lng })} target="_blank" rel="noopener noreferrer">
              <Trans id="Check in Google Maps" />
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  ) : (
    <Box h={h} />
  );
};

export default Map;

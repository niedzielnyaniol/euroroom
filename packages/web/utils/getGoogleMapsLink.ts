const getGoogleMapsLink = ({ lat, lng }: { lat: number; lng: number }) =>
  `http://maps.google.com/maps?z=16&t=m&q=loc:${lat}+${lng}`;

export default getGoogleMapsLink;

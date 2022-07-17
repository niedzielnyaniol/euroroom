type Address = {
  city: string;
  street: string;
  postCode: string;
  buildingNumber: string;
  apartmentNumber: string;
  floorLevel: string;
  markerPosition: {
    id: number;
    lat: number;
    lng: number;
  };
};

export default Address;

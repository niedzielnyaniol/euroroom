import ContactCard from './ContactCard';

export default { component: ContactCard };

export const Default = ContactCard.bind({});
Default.args = {
  email: 'jola@euroroom.com',
  phoneNumber: '+48 231 231 231',
  mainAddress: {
    id: 1,
    city: 'Roseville',
    street: 'Evergreen Rd.',
    postCode: '98823',
    buildingNumber: '497',
    floorLevel: 3,
    markerPosition: {
      id: 1,
      lat: 50,
      lng: 25,
    },
  },
  links: {
    fb: 'https://www.facebook.com/EuroRoomKrakow',
    yt: 'https://www.youtube.com/user/EuroRoomHostelKrakow',
    booking: 'http://www.booking.com/Share-kwoQ8D',
  },
};

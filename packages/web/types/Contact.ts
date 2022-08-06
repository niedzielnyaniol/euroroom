import Address from './Address';

type Links = {
  yt: string;
  fb: string;
  booking: string;
};

type Contact = {
  phoneNumber: string;
  email: string;
  mainAddress: Address;
  locations: Address;
  links?: Links;
};

export default Contact;

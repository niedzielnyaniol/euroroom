import Address from './Address';

type Contact = {
  phoneNumber: string;
  email: string;
  mainAddress: Address;
  locations: Address;
};

export default Contact;

import { FaWpforms } from 'react-icons/fa';

export default {
  name: 'contact',
  icon: FaWpforms,
  type: 'document',
  title: 'Contact Form',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'state',
      type: 'string',
      title: 'Home State'
    },
    {
      name: 'city',
      type: 'string',
      title: 'City, State, Zip'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email Address'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number'
    },
    {
      name: 'subHeader',
      type: 'text',
      title: 'Sub Headeer Description'
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook Profile URL'
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram Profile URL'
    },
  ]
};

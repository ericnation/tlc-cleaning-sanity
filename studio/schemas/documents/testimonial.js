import { MdTextFields } from 'react-icons/md';

export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  icon: MdTextFields,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date'
    },
    {
      name: 'testimonial',
      type: 'simplePortableText',
      title: 'Testimonial from customer'
    },
    {
      name: 'photo',
      type: 'figure',
      title: 'Photo'
    }
  ]
};

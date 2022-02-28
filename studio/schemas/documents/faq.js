import { MdQuestionAnswer } from 'react-icons/md';

export default {
  name: 'faq',
  title: 'FAQs',
  icon: MdQuestionAnswer,
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'localeString'
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'localeBlockContent'
    }
  ],
  preview: {
    select: {
      title: 'question'
    }
  }
};

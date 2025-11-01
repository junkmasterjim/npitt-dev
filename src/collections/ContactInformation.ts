import type { CollectionConfig } from 'payload'

export const ContactInformation: CollectionConfig = {
  slug: 'contact-info',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'github',
      type: 'text',
      required: true,
    },
    {
      name: 'linkedin',
      type: 'text',
      required: true,
    },
  ],
}

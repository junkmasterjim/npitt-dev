import type { CollectionConfig } from 'payload'

export const Elements: CollectionConfig = {
  slug: 'elements',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'code',
      type: 'code',
      required: true,
    },
  ],
}

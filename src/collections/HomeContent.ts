import type { CollectionConfig } from 'payload'

export const HomeContent: CollectionConfig = {
  slug: 'home-content',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'bio',
      type: 'richText',
      required: true
    },
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

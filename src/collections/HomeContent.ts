import type { CollectionConfig } from 'payload'

export const HomeContent: CollectionConfig = {
  slug: 'home-content',
  access: {
    read: () => true,
    create: () => false,
    delete: () => false,
    update: () => true
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
